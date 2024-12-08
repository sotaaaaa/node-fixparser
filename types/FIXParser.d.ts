import { Socket } from "node:net";
import { type TLSSocket } from "node:tls";
import { WebSocket } from "ws";
import { type ConnectionType, FIXParserBase, type Options, type Protocol } from "./FIXParserBase";
import type { IFIXParser } from "./IFIXParser";
import { Field } from "./fields/Field";
import * as Constants from "./fieldtypes";
import { Message } from "./message/Message";
import { Logger } from "./util/Logger";
import { MessageBuffer } from "./util/MessageBuffer";
import { type Parser, type Version } from "./util/util";
/**
 * FIXParser class.
 */
declare class FIXParser implements IFIXParser {
    static version: Version;
    parserName: Parser;
    fixParserBase: FIXParserBase;
    nextNumIn: number;
    nextNumOut: number;
    heartBeatIntervalId: ReturnType<typeof setInterval> | null;
    socket: Socket | WebSocket | TLSSocket | null;
    connected: boolean;
    host: string | null;
    port: number | null;
    protocol: Protocol | null;
    sender: string | null;
    target: string | null;
    heartBeatInterval: number;
    fixVersion: string;
    messageBufferIn: MessageBuffer;
    messageBufferOut: MessageBuffer;
    requestedLogout: boolean;
    connectionType: ConnectionType;
    logger: Logger;
    /**
     * onMessageCallback is called when a message has been received
     *
     * @callback FIXParser~onMessageCallback
     * @param {Message} message
     */
    private onMessageCallback;
    /**
     * onOpenCallback is called the FIX connection has been initiated
     *
     * @callback FIXParser~onOpenCallback
     */
    private onOpenCallback;
    /**
     * onErrorCallback is called the FIX connection failed
     *
     * @callback FIXParser~onErrorCallback
     * @param {Error} error
     */
    private onErrorCallback;
    /**
     * onCloseCallback is called the FIX connection has been closed
     *
     * @callback FIXParser~onCloseCallback
     */
    private onCloseCallback;
    /**
     * onReadyCallback is called the FIX connection is opened and ready
     *
     * @callback FIXParser~onReadyCallback
     */
    private onReadyCallback;
    /**
     * Connect to a remote FIX server/gateway.
     * @param {Options} options - Connection options.
     */
    connect({ host, port, protocol, sender, target, heartbeatIntervalSeconds, fixVersion, tlsKey, tlsCert, tlsUseSNI, tlsSkipStdInPipe, logging, logOptions, proxy, onMessage, onOpen, onError, onClose, onReady, }?: Options): void;
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
    getTimestamp(dateObject?: Date): string;
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
    startHeartbeat(heartBeatInterval?: number, disableLog?: boolean): void;
}
export * from "./fieldtypes";
export type { Protocol } from "./FIXParserBase";
export type { Options } from "./FIXParserBase";
export type { MessageError } from "./message/Message";
export { Constants };
export { Field };
export { Message };
export { FIXParser };
