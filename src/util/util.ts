import type { Logger } from './Logger';

export type Version = {
  version: string | undefined;
  build: string | undefined;
};

declare global {
  const __PACKAGE_VERSION__: string;
  const __BUILD_TIME__: string;
}

export const version: Version = {
  version: __PACKAGE_VERSION__ || process.env.__PACKAGE_VERSION__,
  build: __BUILD_TIME__ || process.env.__BUILD_TIME__,
};

export type Parser = 'FIXServer' | 'FIXParser' | 'FIXParserBrowser';
export const DEFAULT_FIX_VERSION: string = 'FIXT.1.1';
export const DEFAULT_HEARTBEAT_SECONDS: number = 30;
export const SOH: string = '\x01';
export const STRING_EQUALS: string = '=';
export const RE_ESCAPE: RegExp = /[.*+?^${}()|[\]\\]/g;
export const RE_FIND: RegExp = /8=FIXT?\.\d\.\d([^\d]+)/i;
export const READY_MS: number = 100;

export const includesAny = <T>(arr: T[], values: T[]): boolean => {
  return values.some(v => arr.includes(v));
};

export const pad = (value: number, size: number): string => {
  const paddedString = `00${value}`;
  return paddedString.substr(paddedString.length - size);
};

export const adjustForTimezone = (date: Date): Date => {
  const timeOffsetInMS: number = date.getTimezoneOffset() * 60000;
  date.setTime(date.getTime() + timeOffsetInMS);
  return date;
};

export const timestamp = (dateObject: Date, logger: Logger): string => {
  if (Number.isNaN(dateObject.getTime())) {
    logger.log({ level: 'error', message: 'Invalid date specified!' });
  }
  const date: Date = adjustForTimezone(dateObject);
  return `${date.getFullYear()}${pad(date.getMonth() + 1, 2)}${pad(date.getDate(), 2)}-${pad(
    date.getHours(),
    2
  )}:${pad(date.getMinutes(), 2)}:${pad(date.getSeconds(), 2)}.${pad(date.getMilliseconds(), 3)}`;
};
