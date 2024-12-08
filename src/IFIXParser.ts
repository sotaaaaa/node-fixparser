import type { FIXParser } from './FIXParser';
import type {
  ConnectionType,
  FIXParserBase,
  Options as FIXParserOptions,
  Protocol,
} from './FIXParserBase';
import type { Options as FIXParserBrowserOptions } from './FIXParserBrowser';
import type { Field } from './fields/Field';
import type { Message } from './message/Message';
import type { Logger } from './util/Logger';
import type { MessageBuffer } from './util/MessageBuffer';
import type { Parser } from './util/util';

export interface IFIXParser {
  /* Target hostname or IP address */
  host: string | null;
  /* Target port */
  port: number | null;
  /* Type of protocol */
  protocol: Protocol | null;
  /* Assigned value used to identify firm sending message, SenderCompID tag 49 */
  sender: string | null;
  /* Assigned value used to identify receiving firm, TargetCompID tag 56 */
  target: string | null;
  /* Heartbeat interval in seconds */
  heartBeatInterval: number;
  /* Protocol version, defaults to "FIXT.1.1" used by BeginString tag 8 */
  fixVersion: string;
  /* Indicates whether this instance is acceptor or initiator */
  connectionType: ConnectionType;
  /* Name of current parser name */
  parserName: Parser;
  /* Instance of FIXParser base class */
  fixParserBase?: FIXParserBase;
  /* Next expected sequence number in */
  nextNumIn: number;
  /* Next expected sequence number out */
  nextNumOut?: number;
  /* Message counter */
  messageCounter?: number;
  /* Heartbeat interval ID */
  heartBeatIntervalId: ReturnType<typeof setInterval> | null;
  /* Current connection status */
  connected: boolean;
  /* Message buffer of 2500 incoming messages */
  messageBufferIn: MessageBuffer;
  /* Message buffer of 2500 outgoing messages */
  messageBufferOut: MessageBuffer;
  /* Instance of FIXParser class */
  fixParser?: FIXParser;
  /* Whether current FIX session has logged in */
  isLoggedIn?: boolean;
  /* Whether an outgoing message contains a Logout */
  requestedLogout?: boolean;
  /* Logger instance */
  logger: Logger;

  /**
   * Connect to a remote FIX server/gateway.
   * @param {Options} options - Connection options.
   */
  connect?(options: FIXParserOptions | FIXParserBrowserOptions): void;

  /**
   * Get the next outgoing message sequence number.
   *
   * @return {number} The next outgoing message sequence number.
   */
  getNextTargetMsgSeqNum(): number;

  /**
   * Set the next outgoing message sequence number.
   *
   * @param {number} nextMsgSeqNum - The next message sequence number.
   * @return {number} The next outgoing message sequence number.
   */
  setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;

  /**
   * Get current timestamp.
   *
   * @param {Date} dateObject - An instance of a Date class.
   * @return {string} The current timestamp.
   */
  getTimestamp(dateObject: Date): string;

  /**
   * Create an instance of a FIX Message.
   *
   * @param {Array.<Field>} fields - An array of Fields.
   * @return {Message} A FIX Message class instance.
   */
  createMessage(...fields: Field[]): Message;

  /**
   * Parse a FIX message string into Message instance(s).
   *
   * @param {string} data - FIX message string.
   * @return {Message} FIX Message class instance(s).
   */
  parse(data: string): Message[];

  /**
   * Send a FIX message.
   *
   * @param {Message} message - FIX Message class instance.
   */
  send(message: Message): void;

  /**
   * Get connection status.
   *
   * @return {boolean} Current connection status.
   */
  isConnected(): boolean;

  /**
   * Close current connection.
   */
  close(): void;

  /**
   * Stop heartbeat interval.
   */
  stopHeartbeat(): void;

  /**
   * Restart heartbeat interval.
   */
  restartHeartbeat(): void;

  /**
   * Start heartbeat interval.
   *
   * @param {number} heartBeatInterval - Heartbeat interval in seconds.
   * @param {boolean} disableLog - Whether to disable heartbeat logs.
   */
  startHeartbeat(heartBeatInterval: number, disableLog?: boolean): void;
}
