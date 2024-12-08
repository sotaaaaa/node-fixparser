import type { FIXParser } from '../FIXParser';
import type { FIXParser as FIXParserBrowser } from '../FIXParserBrowser';
import type { Message } from '../message/Message';
export declare const clientProcessMessage: (parser: FIXParser | FIXParserBrowser, message: Message) => void;
