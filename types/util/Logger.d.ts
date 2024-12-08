export type Format = 'console' | 'json';
export type Level = 'info' | 'warn' | 'error' | 'silent';
export type LogMessage = {
    level: Level;
    message: string;
    [key: string]: unknown;
};
export type LogOptions = {
    name?: string;
    id?: string | undefined;
    level?: Level;
    format?: Format;
};
export declare class Logger {
    name: string;
    id: string;
    private format;
    private level;
    private enabled;
    constructor(options?: LogOptions);
    private processMessage;
    log(msg: LogMessage): Logger;
    logWarning(msg: Omit<LogMessage, 'level'>): Logger;
    logError(msg: Omit<LogMessage, 'level'>): Logger;
    set silent(silent: boolean);
}
