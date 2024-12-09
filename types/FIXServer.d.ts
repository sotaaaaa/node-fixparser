import { type Server, type Socket } from 'node:net';
import { type WebSocket, WebSocketServer } from 'ws';
import { FIXParser } from './FIXParser';
import type { ConnectionType, Options as FIXParserOptions, Protocol } from './FIXParserBase';
import type { IFIXParser } from './IFIXParser';
import { Field } from './fields/Field';
import * as Constants from './fieldtypes';
import { Message } from './message/Message';
import { Logger } from './util/Logger';
import { MessageBuffer } from './util/MessageBuffer';
import { type Parser, type Version } from './util/util';
type Options = Pick<FIXParserOptions, 'host' | 'port' | 'protocol' | 'sender' | 'target' | 'heartbeatIntervalSeconds' | 'fixVersion' | 'logging' | 'logOptions' | 'onMessage' | 'onOpen' | 'onError' | 'onClose' | 'onReady'>;
declare class FIXServer implements IFIXParser {
    static version: Version;
    parserName: Parser;
    fixParser: FIXParser;
    heartBeatIntervalId: ReturnType<typeof setInterval> | null;
    socket: WebSocket | Socket | null;
    connected: boolean;
    host: string;
    port: number;
    protocol: Protocol;
    sender: string;
    target: string;
    heartBeatInterval: number;
    fixVersion: string;
    messageBufferIn: MessageBuffer;
    messageBufferOut: MessageBuffer;
    requestedLogout: boolean;
    connectionType: ConnectionType;
    logger: Logger;
    server: Server | WebSocketServer | null;
    nextNumIn: number;
    isLoggedIn: boolean;
    messageCounter: number;
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
     * Create FIX server/gateway.
     * @param {Options} options - Server options.
     */
    createServer({ host, port, protocol, sender, target, heartbeatIntervalSeconds, fixVersion, logging, logOptions, onMessage, onOpen, onError, onClose, onReady, }?: Options): void;
    private initialize;
    getNextTargetMsgSeqNum(): number;
    setNextTargetMsgSeqNum(nextMsgSeqNum: number): number;
    getTimestamp(dateObject?: Date): string;
    createMessage(...fields: Field[]): Message;
    parse(data: string): Message[];
    send(message: Message): void;
    /**
     * Get connection status.
     *
     * @return {boolean} Current connection status.
     */
    isConnected(): boolean;
    /**
     * Resets the current session.
     */
    private resetSession;
    /**
     * Close current connection.
     */
    close(): void;
    destroy(): void;
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
export * from './fieldtypes';
export type { Protocol } from './FIXParserBase';
export type { Options } from './FIXParserBase';
export type { MessageError } from './message/Message';
export { Constants };
export { Field };
export { Message };
export { FIXServer };
