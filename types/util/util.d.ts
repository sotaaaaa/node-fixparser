import type { Logger } from './Logger';
export type Version = {
    version: string | undefined;
    build: string | undefined;
};
declare global {
    const __PACKAGE_VERSION__: string;
    const __BUILD_TIME__: string;
}
export declare const version: Version;
export type Parser = 'FIXServer' | 'FIXParser' | 'FIXParserBrowser';
export declare const DEFAULT_FIX_VERSION: string;
export declare const DEFAULT_HEARTBEAT_SECONDS: number;
export declare const SOH: string;
export declare const STRING_EQUALS: string;
export declare const RE_ESCAPE: RegExp;
export declare const RE_FIND: RegExp;
export declare const READY_MS: number;
export declare const includesAny: <T>(arr: T[], values: T[]) => boolean;
export declare const pad: (value: number, size: number) => string;
export declare const adjustForTimezone: (date: Date) => Date;
export declare const timestamp: (dateObject: Date, logger: Logger) => string;
