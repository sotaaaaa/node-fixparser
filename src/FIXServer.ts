import { type Server, type Socket, createServer as createNetServer } from 'node:net';
import { type ServerOptions, type WebSocket, WebSocketServer } from 'ws';

import { FIXParser } from './FIXParser';
import type {
  ConnectionType,
  Options as FIXParserOptions,
  Protocol,
} from './FIXParserBase';
import type { IFIXParser } from './IFIXParser';
import { Field } from './fields/Field';
import * as Constants from './fieldtypes';
import { Message } from './message/Message';
import { heartBeat } from './messagetemplates/MessageTemplates';
import { serverProcessMessage } from './session/ServerMessageProcessor';
import { FrameDecoder } from './util/FrameDecoder';
import { Logger } from './util/Logger';
import { MessageBuffer } from './util/MessageBuffer';
import {
  DEFAULT_FIX_VERSION,
  DEFAULT_HEARTBEAT_SECONDS,
  type Parser,
  READY_MS,
  type Version,
  version,
} from './util/util';

type Options = Pick<
  FIXParserOptions,
  | 'host'
  | 'port'
  | 'protocol'
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

class FIXServer implements IFIXParser {
  /* FIXParser Version */
  public static version: Version = version;

  /* Name of current parser name */
  public parserName: Parser = 'FIXServer';
  /* Instance of FIXParser class */
  public fixParser: FIXParser = new FIXParser();
  /* Heartbeat interval ID */
  public heartBeatIntervalId: ReturnType<typeof setInterval> | null = null;
  /* Type of socket connection (Socket, WebSocket, TLSSocket) */
  public socket: WebSocket | Socket | null = null;
  /* Current connection status */
  public connected = false;
  /* Target hostname or IP address */
  public host = 'localhost';
  /* Target port */
  public port = 9878;
  /* Type of protocol */
  public protocol: Protocol = 'tcp';
  /* Assigned value used to identify firm sending message, SenderCompID tag 49 */
  public sender = '';
  /* Assigned value used to identify receiving firm, TargetCompID tag 56 */
  public target = '';
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
  public connectionType: ConnectionType = 'acceptor';
  /* Logger instance */
  public logger: Logger = new Logger();
  /* Server socket connection */
  public server: Server | WebSocketServer | null = null;
  /* Next expected sequence number in */
  public nextNumIn = 1;
  /* Whether current FIX session has logged in */
  public isLoggedIn = false;
  /* Message counter */
  public messageCounter = 0;

  // Required logon fields
  // Example: Add fields required for logon (username, password, etc.)
  public requiredLogonFields: number[] = [];

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
   * Create FIX server/gateway.
   * @param {Options} options - Server options.
   */
  public createServer(
    {
      host = this.host,
      port = this.port,
      protocol = this.protocol,
      sender = this.sender,
      target = this.target,
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
            name: logOptions.name || 'fixserver',
            ...logOptions,
          }
        : {
            name: 'fixserver',
            format: 'json',
          }
    );
    if (!logging) {
      this.logger.silent = true;
    }
    this.connectionType = 'acceptor';
    this.host = host;
    this.port = port;
    this.protocol = protocol;
    this.sender = sender;
    this.target = target;
    this.fixParser.sender = sender;
    this.fixParser.target = target;
    this.heartBeatInterval = heartbeatIntervalSeconds;
    this.fixVersion = fixVersion;

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

    this.initialize();
  }

  private initialize() {
    this.messageCounter = 0;
    if (this.protocol === 'tcp') {
      this.server = createNetServer((socket: Socket) => {
        this.socket = socket;
        this.socket.pipe(new FrameDecoder()).on('data', (data: string) => {
          this.connected = true;
          const messages: Message[] = this.parse(data.toString());
          let i = 0;
          for (i; i < messages.length; i++) {
            serverProcessMessage(this, messages[i]);
            this.messageBufferIn.add(messages[i]);
            this.onMessageCallback?.(messages[i]);
          }
        });
        this.socket.on('connect', () => {
          this.logger.log({
            level: 'info',
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Connection established`,
          });
          this.connected = true;
          this.onOpenCallback?.();
        });
        this.socket.on('close', () => {
          this.connected = false;
          this.stopHeartbeat();
          this.resetSession();
          this.logger.log({
            level: 'info',
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Closed connection`,
          });
          this.onCloseCallback?.();
        });
        this.socket.on('timeout', () => {
          this.connected = false;
          this.stopHeartbeat();
          this.close();
          this.resetSession();
          this.logger.logError({
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Connection timeout`,
          });
          this.onCloseCallback?.();
        });
        this.socket.on('error', (error: Error) => {
          this.connected = false;
          this.stopHeartbeat();
          this.close();
          this.resetSession();
          this.logger.logError({
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Error`,
            error,
          });
          this.onErrorCallback?.(error);
        });
      });
      this.server.listen(this.port, this.host, () => {
        this.logger.log({
          level: 'info',
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Listening for connections at ${
            this.host
          }:${this.port}...`,
        });
        setTimeout(() => this.onReadyCallback?.(), READY_MS);
      });
    } else if (this.protocol === 'websocket') {
      const serverOptions: ServerOptions = {
        host: this.host,
        port: this.port,
      };
      this.server = new WebSocketServer(serverOptions);
      this.server.on('connection', socket => {
        this.connected = true;
        socket.on('message', (data: string | Buffer) => {
          const messages: Message[] = this.parse(data.toString());
          let i = 0;
          for (i; i < messages.length; i++) {
            serverProcessMessage(this, messages[i]);
            this.messageBufferIn.add(messages[i]);
            this.onMessageCallback?.(messages[i]);
          }
        });
      });
      this.server.on('close', () => {
        this.connected = false;
        this.stopHeartbeat();
        this.onCloseCallback?.();
        this.logger.log({
          level: 'info',
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Closed connection`,
        });
      });
      this.server.on('error', error => {
        this.connected = false;
        this.stopHeartbeat();
        this.close();
        this.onErrorCallback?.(error);
        this.logger.logError({
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Error`,
          error,
        });
      });
      this.server.on('listening', () => {
        this.logger.log({
          level: 'info',
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Listening for connections at ${
            this.host
          }:${this.port}...`,
        });
        setTimeout(() => this.onReadyCallback?.(), READY_MS);
      });
    } else {
      this.logger.logError({
        message: `FIXServer: Create server, invalid protocol: ${this.protocol.toUpperCase()}`,
      });
    }
  }

  public getNextTargetMsgSeqNum(): number {
    return this.fixParser.getNextTargetMsgSeqNum();
  }

  public setNextTargetMsgSeqNum(nextMsgSeqNum: number): number {
    return this.fixParser.setNextTargetMsgSeqNum(nextMsgSeqNum);
  }

  public getTimestamp(dateObject = new Date()): string {
    return this.fixParser.getTimestamp(dateObject);
  }

  public createMessage(...fields: Field[]): Message {
    return this.fixParser.createMessage(...fields);
  }

  public parse(data: string): Message[] {
    return this.fixParser.parse(data);
  }

  public send(message: Message): void {
    if (this.protocol === 'tcp') {
      const socket: Socket = this.socket! as Socket;
      const encodedMessage: string = message.encode();
      this.fixParser.setNextTargetMsgSeqNum(this.fixParser.getNextTargetMsgSeqNum() + 1);
      if (!socket.write(encodedMessage)) {
        this.logger.logError({
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Could not send message, socket not open`,
        });
      } else {
        this.messageBufferOut.add(message.clone());
        this.restartHeartbeat();
        this.logger.log({
          level: 'info',
          message: `FIXServer (${this.protocol.toUpperCase()}): >> sent`,
          fix: encodedMessage.replace(/\x01/g, '|'),
        });
      }
    } else if (this.protocol === 'websocket') {
      const server: WebSocketServer = this.server! as WebSocketServer;
      const encodedMessage: string = message.encode();
      if (server?.clients && server.clients.size > 0) {
        server.clients.forEach((client: WebSocket) => {
          if (client.readyState === client.OPEN) {
            this.fixParser.setNextTargetMsgSeqNum(
              this.fixParser.getNextTargetMsgSeqNum() + 1
            );
            client.send(encodedMessage);
            this.messageBufferOut.add(message.clone());
            this.restartHeartbeat();
            this.logger.log({
              level: 'info',
              message: `FIXServer (${this.protocol.toUpperCase()}): >> sent`,
              fix: encodedMessage.replace(/\x01/g, '|'),
            });
          }
        });
      } else {
        this.logger.logError({
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Could not send message, socket not connected`,
          fixMessage: message,
        });
      }
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
   * Resets the current session.
   */
  private resetSession() {
    this.isLoggedIn = false;
    this.messageCounter = 0;
  }

  /**
   * Close current connection.
   */
  public close(): void {
    if (this.protocol === 'tcp') {
      const socket: Socket = this.socket! as Socket;
      const server: Server = this.server! as Server;
      if (socket?.end) {
        socket.end(() => {
          if (server) {
            server.close(() => {
              this.logger.log({
                level: 'info',
                message: `FIXServer (${this.protocol.toUpperCase()}): -- Ended session`,
              });
              this.initialize();
            });
          }
        });
      }
    } else if (this.protocol === 'websocket') {
      const server: WebSocketServer = this.server! as WebSocketServer;
      if (server) {
        server.clients.forEach((client: WebSocket) => {
          client.close();
        });
        server.close(() => {
          this.logger.log({
            level: 'info',
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Ended session`,
          });
          this.initialize();
        });
      }
    }
  }

  public destroy(): void {
    this.stopHeartbeat();
    if (this.protocol === 'tcp') {
      const socket: Socket = this.socket! as Socket;
      const server: Server = this.server! as Server;
      socket.destroy();
      server.close(() => {
        this.logger.log({
          level: 'info',
          message: `FIXServer (${this.protocol.toUpperCase()}): -- Destroyed`,
        });
      });
    } else if (this.protocol === 'websocket') {
      const server: WebSocketServer = this.server! as WebSocketServer;
      if (server) {
        server.clients.forEach((client: WebSocket) => {
          client.close();
        });
        server.close(() => {
          this.logger.log({
            level: 'info',
            message: `FIXServer (${this.protocol.toUpperCase()}): -- Destroyed`,
          });
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
    this.startHeartbeat();
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
        message: `FIXServer (${this.protocol.toUpperCase()}): -- Heartbeat configured to ${heartBeatInterval} seconds`,
      });
    }
    this.heartBeatInterval = heartBeatInterval;
    this.heartBeatIntervalId = setInterval(() => {
      const heartBeatMessage: Message = heartBeat(this);
      this.send(heartBeatMessage);
      const encodedMessage: string = heartBeatMessage.encode();
      this.logger.log({
        level: 'info',
        message: `FIXServer (${this.protocol.toUpperCase()}): >> sent Heartbeat`,
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
export { FIXServer };
