import { v4 as uuidv4 } from 'uuid';

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

const shouldLog = (message: LogMessage, level: Level): boolean => {
  if (level === 'error' && message.level === 'error') {
    return true;
  }
  if (level === 'warn' && (message.level === 'error' || message.level === 'warn')) {
    return true;
  }
  return (
    level === 'info' &&
    (message.level === 'error' || message.level === 'warn' || message.level === 'info')
  );
};

const formatters = {
  console: (msg: LogMessage, logger: Logger): Logger => {
    const { name, id, message, level, ...additionalProperties } = msg;
    const kv = Array.from(
      Object.entries(additionalProperties),
      ([key, value]) => `${key}: ${value}`
    );
    console.log(`${logger.name} ${logger.id}: ${msg.message}`, kv.join(', '));
    return logger;
  },
  json: (msg: LogMessage, logger: Logger): Logger => {
    console.log(JSON.stringify(msg));
    return logger;
  },
};

export class Logger {
  public name = '';
  public id: string;
  private format: Format;
  private level: Level;
  private enabled = true;

  constructor(options?: LogOptions) {
    this.name = options?.name || '';
    this.id = options?.id || uuidv4();
    this.format = options?.format || 'json';
    this.level = options?.level || 'info';
  }

  private processMessage(msg: LogMessage): Logger {
    if (this.level === 'silent' || !this.enabled) return this;

    if (!shouldLog(msg, this.level)) {
      return this;
    }

    const processedMessage = {
      name: this.name,
      id: this.id,
      timestamp: Date.now(),
      ...msg,
    };

    if (this.format === 'json') {
      return formatters.json(processedMessage, this);
    }
    if (this.format === 'console') {
      return formatters.console(processedMessage, this);
    }
    return this;
  }

  public log(msg: LogMessage): Logger {
    return this.processMessage({
      ...msg,
      level: msg.level ? msg.level : ('info' as Level),
    });
  }

  public logWarning(msg: Omit<LogMessage, 'level'>): Logger {
    return this.processMessage({ ...msg, level: 'warn' as Level } as LogMessage);
  }

  public logError(msg: Omit<LogMessage, 'level'>): Logger {
    return this.processMessage({ ...msg, level: 'error' as Level } as LogMessage);
  }

  public set silent(silent: boolean) {
    if (silent) {
      this.level = 'silent';
    } else {
      this.level = 'info';
    }
  }
}
