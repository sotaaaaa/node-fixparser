import {
  type ConnectionType,
  FIXParserBase,
  type Options as FIXParserOptions,
  type Protocol,
} from './FIXParserBase';
import type { IFIXParser } from './IFIXParser';
import { Field } from './fields/Field';
import * as Constants from './fieldtypes';
import { Message } from './message/Message';
import { heartBeat } from './messagetemplates/MessageTemplates';
import { clientProcessMessage } from './session/ClientMessageProcessor';
import { Logger } from './util/Logger';
import { MessageBuffer } from './util/MessageBuffer';
import {
  DEFAULT_FIX_VERSION,
  DEFAULT_HEARTBEAT_SECONDS,
  type Parser,
  type Version,
  timestamp,
  version,
} from './util/util';

export type Options = Pick<
  FIXParserOptions,
  | 'host'
  | 'port'
  | 'sender'
  | 'target'
  | 'heartbeatIntervalSeconds'
  | 'fixVersion'
  | 'logging'
  | 'logOptions'
  | 'onMessage'
  | 'onOpen'
  | 'onError'
  | 'onClose'
  | 'onReady'
>;

class FIXParserBrowser implements IFIXParser {
  /* FIXParser Version */
  public static version: Version = version;

  /* Name of current parser name */
  public parserName: Parser = 'FIXParserBrowser';
  /* Instance of FIXParser base class */
  public fixParserBase: FIXParserBase = new FIXParserBase();
  /* Next expected sequence number in */
  public nextNumIn = 1;
  /* Next expected sequence number out */
  public nextNumOut = 1;
  /* Heartbeat interval ID */
  public heartBeatIntervalId: ReturnType<typeof setInterval> | null = null;
  /* Websocket connection */
  public socket: WebSocket | null = null;
  /* Current connection status */
  public connected = false;
  /* Target hostname or IP address */
  public host: string | null = null;
  /* Target port */
  public port: number | null = null;
  /* Type of protocol */
  public protocol: Protocol | null = 'websocket';
  /* Assigned value used to identify firm sending message, SenderCompID tag 49 */
  public sender: string | null = null;
  /* Assigned value used to identify receiving firm, TargetCompID tag 56 */
  public target: string | null = null;
  /* Heartbeat interval in seconds */
  public heartBeatInterval: number = DEFAULT_HEARTBEAT_SECONDS;
  /* Protocol version, used by BeginString tag 8 */
  public fixVersion: string = DEFAULT_FIX_VERSION;
  /* Message buffer of 2500 incoming messages */
  public messageBufferIn: MessageBuffer = new MessageBuffer();
  /* Message buffer of 2500 outgoing messages */
  public messageBufferOut: MessageBuffer = new MessageBuffer();
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
      sender = 'SENDER',
      target = 'TARGET',
      heartbeatIntervalSeconds = DEFAULT_HEARTBEAT_SECONDS,
      fixVersion = this.fixVersion,
      logging = true,
      logOptions = undefined,
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
            name: logOptions.name || 'fixparser-browser',
            ...logOptions,
          }
        : {
            name: 'fixparser-browser',
            format: 'json',
          }
    );
    if (!logging) {
      this.logger.silent = true;
    }
    this.connectionType = 'initiator';
    this.host = host;
    this.port = port;
    this.protocol = 'websocket';
    this.sender = sender;
    this.target = target;
    this.heartBeatInterval = heartbeatIntervalSeconds;
    this.fixVersion = fixVersion;
    this.fixParserBase.fixVersion = fixVersion;

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

    this.socket = new WebSocket(
      this.host.indexOf('ws://') === -1 && this.host.indexOf('wss://') === -1
        ? `ws://${this.host}:${this.port}`
        : `${this.host}:${this.port}`
    );
    this.socket.addEventListener('open', event => {
      this.connected = true;
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol?.toUpperCase()}): -- Connected: ${
          event.target
        }, readyState: ${this.socket?.readyState}`,
      });
      this.onOpenCallback?.();
    });
    this.socket.addEventListener('close', event => {
      this.connected = false;
      this.logger.log({
        level: 'info',
        message: `FIXParser (${this.protocol?.toUpperCase()}): -- Connection closed: ${
          event.target
        }, readyState: ${this.socket?.readyState}`,
      });
      this.onCloseCallback?.();
      this.stopHeartbeat();
    });
    this.socket.addEventListener('message', event => {
      const messages: Message[] = this.fixParserBase.parse(event.data as string);
      let i = 0;
      for (i; i < messages.length; i++) {
        clientProcessMessage(this, messages[i]);
        this.messageBufferIn.add(messages[i]);
        this.onMessageCallback?.(messages[i]);
      }
    });
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
    return new Message(this.fixVersion, ...fields);
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
    if (this.socket?.readyState === 1) {
      this.setNextTargetMsgSeqNum(this.getNextTargetMsgSeqNum() + 1);
      this.socket?.send(message.encode());
      this.messageBufferOut.add(message.clone());
      this.restartHeartbeat();
    } else {
      this.logger.logError({
        message: `FIXParser (${this.protocol?.toUpperCase()}): -- Could not send message, socket not open`,
        fixMessage: message,
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
    this.socket?.close();
    this.connected = false;
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
export type { MessageError } from './message/Message';
export { Constants };
export { Field };
export { Message };
export { FIXParserBrowser as FIXParser };
