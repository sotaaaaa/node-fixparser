import type { ProxyAgent } from 'proxy-agent';
import { Enums as EnumsCache } from './enums/Enums';
import { Fields as FieldsCache } from './fields/Fields';
import { Message } from './message/Message';
import type { LogOptions } from './util/Logger';
export type Protocol = 'tcp' | 'ssl-tcp' | 'tls-tcp' | 'websocket';
export type ConnectionType = 'acceptor' | 'initiator';
export type Options = {
    host?: string;
    port?: number;
    protocol?: Protocol;
    sender?: string;
    target?: string;
    heartbeatIntervalSeconds?: number;
    fixVersion?: string;
    tlsKey?: unknown | null;
    tlsCert?: unknown | null;
    tlsUseSNI?: boolean;
    tlsSkipStdInPipe?: boolean | null;
    logging?: boolean;
    logOptions?: LogOptions;
    proxy?: ProxyAgent | null;
    onReady?: () => void;
    onMessage?: (message: Message) => void;
    onOpen?: () => void;
    onClose?: () => void;
    onError?: (error?: Error) => void;
};
/**
 * FIXParser base class.
 */
export declare class FIXParserBase {
    fixVersion: string;
    message: Message | null;
    messageTags: string[];
    messageString: string;
    fields: FieldsCache;
    enums: EnumsCache;
    /**
     * Processes a message by splitting up the string into tags.
     */
    processMessage(): void;
    /**
     * Processes fields of a message.
     */
    processFields(): void;
    /**
     * Parses FIX message(s) string into Message class instances.
     */
    parse(data: string): Message[];
}
