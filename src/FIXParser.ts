import { Socket } from 'node:net';
import {
  type ConnectionOptions,
  type KeyObject,
  connect as TLSConnect,
  type TLSSocket,
} from 'node:tls';
import { WebSocket } from 'ws';

import {
  type ConnectionType,
  FIXParserBase,
  type Options,
  type Protocol,
} from './FIXParserBase';
import type { IFIXParser } from './IFIXParser';
import { Field } from './fields/Field';
import * as Constants from './fieldtypes';
import { Field as FieldType } from './fieldtypes/Field';
import { Message as MessageType } from './fieldtypes/Message';
import { Message } from './message/Message';
import { heartBeat } from './messagetemplates/MessageTemplates';
import { clientProcessMessage } from './session/ClientMessageProcessor';
import { FrameDecoder } from './util/FrameDecoder';
import { Logger } from './util/Logger';
import { MessageBuffer } from './util/MessageBuffer';
import {
  DEFAULT_FIX_VERSION,
  DEFAULT_HEARTBEAT_SECONDS,
  type Parser,
  READY_MS,
  type Version,
  timestamp,
  version,
} from './util/util';

/**
 * FIXParser class.
 */
class FIXParser implements IFIXParser {
  /* FIXParser Version */
  public static version: Version = version;

  /* Name of current parser name */
  public parserName: Parser = 'FIXParser';
  /* Instance of FIXParser base class */
  public fixParserBase: FIXParserBase = new FIXParserBase();
  /* Next expected sequence number in */
  public nextNumIn = 1;
  /* Next expected sequence number out */
  public nextNumOut = 1;
  /* Heartbeat interval ID */
  public heartBeatIntervalId: ReturnType<typeof setInterval> | null = null;
  /* Type of socket connection (Socket, WebSocket, TLSSocket) */
  public socket: Socket | WebSocket | TLSSocket | null = null;
  /* Current connection status */
  public connected = false;
  /* Target hostname or IP address */
  public host: string | null = null;
  /* Target port */
  public port: number | null = null;
  /* Type of protocol */
  public protocol: Protocol | null = 'tcp';
  /* Assigned value used to identify firm sending message, SenderCompID tag 49 */
  public sender: string | null = null;
  /* Assigned value used to identify receiving firm, TargetCompID tag 56 */
  public target: string | null = null;
  /* Heartbeat interval in seconds */
  public heartBeatInterval: number = DEFAULT_HEARTBEAT_SECONDS;
  /* Protocol version, defaults to "FIXT.1.1" used by BeginString tag 8 */
  public fixVersion: string = DEFAULT_FIX_VERSION;
  /* Message buffer of 2500 incoming messages */
  public messageBufferIn: MessageBuffer = new MessageBuffer();
  /* Message buffer of 2500 outgoing messages */
  public messageBufferOut: MessageBuffer = new MessageBuffer();
  /* Whether an outgoing message contains a Logout */
  public requestedLogout = false;
  /* Indicates whether this instance is acceptor or initiator */
  public connectionType: ConnectionType = 'initiator';
  /* Logger instance */
  public logger: Logger = new Logger();

  /**
   * onMessageCallback is called when a message has been received
   *
   * @callback FIXParser~onMessageCallback
   * @param {Message} message
   */
  private onMessageCallback: Options['onMessage'] = message => {};

  /**
   * onOpenCallback is called the FIX connection has been initiated
   *
   * @callback FIXParser~onOpenCallback
   */
  private onOpenCallback: Options['onOpen'] = () => {};

  /**
   * onErrorCallback is called the FIX connection failed
   *
   * @callback FIXParser~onErrorCallback
   * @param {Error} error
   */
  private onErrorCallback: Options['onError'] = error => {};

  /**
   * onCloseCallback is called the FIX connection has been closed
   *
   * @callback FIXParser~onCloseCallback
   */
  private onCloseCallback: Options['onClose'] = () => {};

  /**
   * onReadyCallback is called the FIX connection is opened and ready
   *
   * @callback FIXParser~onReadyCallback
   */
  private onReadyCallback: Options['onReady'] = () => {};

  /**
   * Connect to a remote FIX server/gateway.
   * @param {Options} options - Connection options.
   */
  public connect(
    {
      host = 'localhost',
      port = 9878,
      protocol = 'tcp',
      sender = 'SENDER',
      target = 'TARGET',
      heartbeatIntervalSeconds = DEFAULT_HEARTBEAT_SECONDS,
      fixVersion = this.fixVersion,
      tlsKey = null,
      tlsCert = null,
      tlsUseSNI = false,
      tlsSkipStdInPipe = false,
      logging = true,
      logOptions = undefined,
      proxy = null,
      onMessage,
      onOpen,
      onError,
      onClose,
      onReady,
    }: Options = {
      onMessage: this.onMessageCallback,
      onOpen: this.onOpenCallback,
      onError: this.onErrorCallback,
      onClose: this.onCloseCallback,
      onReady: this.onReadyCallback,
    }
  ): void {
    this.logger = new Logger(
      logOptions
        ? {
            name: logOptions.name || 'fixparser',
            ...logOptions,
          }
        : {
            name: 'fixparser',
            format: 'json',
          }
    );
    if (!logging) {
      this.logger.silent = true;
    }
    this.connectionType = 'initiator';
    this.fixVersion = fixVersion;
    this.fixParserBase.fixVersion = fixVersion;
    this.protocol = protocol;
    this.sender = sender;
    this.target = target;
    this.heartBeatInterval = heartbeatIntervalSeconds;

    if (onMessage !== undefined) {
      this.onMessageCallback = onMessage;
    }

    if (onOpen !== undefined) {
      this.onOpenCallback = onOpen;
    }

    if (onError !== undefined) {
      this.onErrorCallback = onError;
    }

    if (onClose !== undefined) {
      this.onCloseCallback = onClose;
    }

    if (onReady !== undefined) {
      this.onReadyCallback = onReady;
    }

    if (protocol === 'tcp') {
      this.socket = new Socket();
      this.socket.setEncoding('ascii');
      this.socket.pipe(new FrameDecoder()).on('data', (data: string) => {
        const messages: Message[] = this.parse(data.toString());
        let i = 0;
        for (i; i < messages.length; i++) {
          clientProcessMessage(this, messages[i]);
          this.messageBufferIn.add(messages[i]);
          this.onMessageCallback?.(messages[i]);
        }
      });
      this.socket.connect(port, host, () => {
        this.connected = true;
        this.logger.log({
          level: 'info',
          message: `FIXParser (${this.protocol?.toUpperCase()}): -- Connected`,
        });
        this.onOpenCallback?.();
      });
      this.socket.on('close', () => {
        this.connected = false;
        this.onCloseCallback?.();
        this.stopHeartbeat();
      });
      this.socket.on('ready', () => {
        setTimeout(() => this.onReadyCallback?.(), READY_MS);
      });
      this.socket.on('timeout', () => {
        this.connected = false;
        const socket: Socket = this.socket! as Socket;
        this.onCloseCallback?.();
        socket.end();
        this.stopHeartbeat();
      });
      this.socket.on('error', error => {
        this.connected = false;
        this.onErrorCallback?.(error);
        this.stopHeartbeat();
      });
    } else if (protocol === 'websocket') {
      const connectionString: string =
        host.indexOf('ws://') === -1 && host.indexOf('wss://') === -1
          ? `ws://${host}:${port}`
          : `${host}:${port}`;
      if (proxy) {
        this.socket = new WebSocket(connectionString, { agent: proxy });
      } else {
        this.socket = new WebSocket(connectionString);
      }
      this.socket.on('message', (data: string | Buffer) => {
        const messages: Message[] = this.parse(data.toString());
        let i = 0;
        for (i; i < messages.length; i++) {
          clientProcessMessage(this, messages[i]);
          this.messageBufferIn.add(messages[i]);
          this.onMessageCallback?.(messages[i]);
        }
      });
      this.socket.on('open', () => {
        this.logger.log({
          level: 'info',
          message: `FIXParser (${this.protocol?.toUpperCase()}): -- Connected`,
        });
        this.connected = true;
        this.onOpenCallback?.();
      });
      this.socket.on('close', () => {
        this.connected = false;
        this.onCloseCallback?.();
        this.stopHeartbeat();
      });
      if (
        this.socket.readyState ===
        (WebSocket.OPEN || WebSocket.CLOSED || WebSocket.CLOSING || WebSocket.CONNECTING)
      ) {
        setTimeout(() => this.onReadyCallback?.(), READY_MS);
      }
    } else if (protocol === 'ssl-tcp' || protocol === 'tls-tcp') {
      const options: ConnectionOptions = {
        host,
        port,
        rejectUnauthorized: false,
      };

      if (tlsKey && tlsCert) {
        options.key = tlsKey as
          | string
          | Buffer
          | Array<string | Buffer | KeyObject>
          | undefined;
        options.cert = tlsCert as string | Buffer | Array<string | Buffer> | undefined;
      }

      if (tlsUseSNI) {
        options.servername = host;
      }

      this.socket = TLSConnect(port, host, options, () => {
        this.connected = true;
        this.onOpenCallback?.();
        this.logger.log({
          level: 'info',
          message: `FIXParser (${this.protocol?.toUpperCase()}): -- Connected through TLS`,
        });

        if (!tlsSkipStdInPipe) {
          process.stdin.pipe(this.socket as TLSSocket);
          process.stdin.resume();
        }
      });
      this.socket.setEncoding('utf8');
      (this.socket as TLSSocket).pipe(new FrameDecoder()).on('data', (data: string) => {
        const messages: Message[] = this.parse(data.toString());
        let i = 0;
        for (i; i < messages.length; i++) {
          clientProcessMessage(this, messages[i]);
          this.messageBufferIn.add(messages[i]);
          this.onMessageCallback?.(messages[i]);
        }
      });
      this.socket.on('close', () => {
        this.connected = false;
        this.onCloseCallback?.();
        this.stopHeartbeat();
      });
      this.socket.on('timeout', () => {
        const socket: TLSSocket = this.socket! as TLSSocket;
        this.connected = false;
        this.onCloseCallback?.();
        socket.end();
        this.stopHeartbeat();
      });
      this.socket.on('error', (error: Error) => {
        this.connected = false;
        this.onErrorCallback?.(error);
        this.stopHeartbeat();
      });
      setTimeout(() => this.onReadyCallback?.(), READY_MS);
    }
  }

  /**
   * Get the next outgoing message sequence number.
   *
   * @return {number} The next outgoing message sequence number.
   */
  public getNextTargetMsgSeqNum(): number {
    return this.nextNumOut;
  }

  /**
   * Set the next outgoing message sequence number.
   *
   * @param {number} nextMsgSeqNum - The next message sequence number.
   * @return {number} The next outgoing message sequence number.
   */
  public setNextTargetMsgSeqNum(nextMsgSeqNum: number): number {
    this.nextNumOut = nextMsgSeqNum;
    return this.nextNumOut;
  }

  /**
   * Get current timestamp.
   *
   * @param {Date} dateObject - An instance of a Date class.
   * @return {string} The current timestamp.
   */
  public getTimestamp(dateObject = new Date()): string {
    return timestamp(dateObject, this.logger);
  }

  /**
   * Create an instance of a FIX Message.
   *
   * @param {Array.<Field>} fields - An array of Fields.
   * @return {Message} A FIX Message class instance.
   */
  public createMessage(...fields: Field[]): Message {
    const message: Message = new Message(this.fixVersion, ...fields);
    message.messageSequence = this.getNextTargetMsgSeqNum();
    return message;
  }

  /**
   * Parse a FIX message string into Message instance(s).
   *
   * @param {string} data - FIX message string.
   * @return {Message} FIX Message class instance(s).
   */
  public parse(data: string): Message[] {
    return this.fixParserBase.parse(data);
  }

  /**
   * Send a FIX message.
   *
   * @param {Message} message - FIX Message class instance.
   */
  public send(message: Message): void {
    const messageType: Field | undefined = message.getField(FieldType.MsgType);
    if (messageType && messageType.value === MessageType.Logout) {
      this.requestedLogout = true;
    }

    const encodedMessage: string = message.encode();
    if (this.protocol === 'tcp' && this.connected) {
      this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
      (this.socket! as Socket).write(encodedMessage);
      this.messageBufferOut.add(message.clone());
      this.restartHeartbeat();
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol.toUpperCase()}): >> sent`,
        fix: encodedMessage.replace(/\x01/g, '|'),
      });
    } else if (
      this.protocol === 'websocket' &&
      (this.socket! as WebSocket).readyState === WebSocket.OPEN
    ) {
      this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
      (this.socket! as WebSocket).send(encodedMessage);
      this.messageBufferOut.add(message.clone());
      this.restartHeartbeat();
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol.toUpperCase()}): >> sent`,
        fix: encodedMessage.replace(/\x01/g, '|'),
      });
    } else if (
      (this.protocol === 'ssl-tcp' || this.protocol === 'tls-tcp') &&
      this.connected
    ) {
      this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
      (this.socket! as TLSSocket).write(encodedMessage);
      this.messageBufferOut.add(message.clone());
      this.restartHeartbeat();
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol.toUpperCase()}): >> sent`,
        fix: encodedMessage.replace(/\x01/g, '|'),
      });
    } else {
      this.logger.logError({
        message: `FIXParser (${this.protocol?.toUpperCase()}): -- Could not send message, no connection`,
        fix: encodedMessage.replace(/\x01/g, '|'),
      });
    }
  }

  /**
   * Get connection status.
   *
   * @return {boolean} Current connection status.
   */
  public isConnected(): boolean {
    return this.connected;
  }

  /**
   * Close current connection.
   */
  public close(): void {
    if (this.protocol === 'tcp') {
      const socket: Socket = this.socket! as Socket;
      if (socket) {
        socket.destroy();
        this.connected = false;
      } else {
        this.logger.logError({
          message: `FIXParser (${this.protocol.toUpperCase()}): -- Could not close socket, connection not open`,
        });
      }
    } else if (this.protocol === 'websocket') {
      const socket: WebSocket = this.socket! as WebSocket;
      if (socket) {
        try {
          socket.close();
        } catch (error) {
          this.logger.logError({
            message: `FIXParser (${this.protocol.toUpperCase()}): -- Could not close socket,`,
            error,
          });
        }
        this.connected = false;
      } else {
        this.logger.logError({
          message: `FIXParser (${this.protocol.toUpperCase()}): -- Could not close socket, connection not open`,
        });
      }
    } else if (this.protocol === 'ssl-tcp' || this.protocol === 'tls-tcp') {
      const socket: TLSSocket = this.socket! as TLSSocket;
      if (socket) {
        socket.destroy();
        this.connected = false;
      } else {
        this.logger.logError({
          message: `FIXParser (${this.protocol.toUpperCase()}): -- Could not close socket, connection not open`,
        });
      }
    }
  }

  /**
   * Stop heartbeat interval.
   */
  public stopHeartbeat(): void {
    clearInterval(this.heartBeatIntervalId!);
  }

  /**
   * Restart heartbeat interval.
   */
  public restartHeartbeat(): void {
    this.stopHeartbeat();
    this.startHeartbeat(this.heartBeatInterval, true);
  }

  /**
   * Start heartbeat interval.
   *
   * @param {number} heartBeatInterval - Heartbeat interval in seconds.
   * @param {boolean} disableLog - Whether to disable heartbeat logs.
   */
  public startHeartbeat(
    heartBeatInterval: number = this.heartBeatInterval,
    disableLog?: boolean
  ): void {
    this.stopHeartbeat();
    if (!disableLog) {
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol?.toUpperCase()}): -- Heartbeat configured to ${heartBeatInterval} seconds`,
      });
    }
    this.heartBeatInterval = heartBeatInterval;
    this.heartBeatIntervalId = setInterval(() => {
      const heartBeatMessage: Message = heartBeat(this);
      this.send(heartBeatMessage);
      const encodedMessage: string = heartBeatMessage.encode();
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol?.toUpperCase()}): >> sent Heartbeat`,
        fix: encodedMessage.replace(/\x01/g, '|'),
      });
    }, this.heartBeatInterval * 1000);
  }
}

export * from './fieldtypes';
export type { Protocol } from './FIXParserBase';
export type { Options } from './FIXParserBase';
export type { MessageError } from './message/Message';
export { Constants };
export { Field };
export { Message };
export { FIXParser };
