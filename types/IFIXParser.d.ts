import type { FIXParser } from './FIXParser';
import type { ConnectionType, FIXParserBase, Options as FIXParserOptions, Protocol } from './FIXParserBase';
import type { Options as FIXParserBrowserOptions } from './FIXParserBrowser';
import type { Field } from './fields/Field';
import type { Message } from './message/Message';
import type { Logger } from './util/Logger';
import type { MessageBuffer } from './util/MessageBuffer';
import type { Parser } from './util/util';
export interface IFIXParser {
    host: string | null;
    port: number | null;
    protocol: Protocol | null;
    sender: string | null;
    target: string | null;
    heartBeatInterval: number;
    fixVersion: string;
    connectionType: ConnectionType;
    parserName: Parser;
    fixParserBase?: FIXParserBase;
    nextNumIn: number;
    nextNumOut?: number;
    messageCounter?: number;
    heartBeatIntervalId: ReturnType<typeof setInterval> | null;
    connected: boolean;
    messageBufferIn: MessageBuffer;
    messageBufferOut: MessageBuffer;
    fixParser?: FIXParser;
    isLoggedIn?: boolean;
    requestedLogout?: boolean;
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
