import type { IFIXParser } from '../IFIXParser';
import type { Message } from '../message/Message';
import type { MessageBuffer } from '../util/MessageBuffer';
export declare const handleLogon: (parser: IFIXParser, messageBuffer: MessageBuffer, message: Message) => boolean;
