import type { IFIXParser } from '../IFIXParser';
import type { Message } from '../message/Message';
import { type MessageBuffer } from '../util/MessageBuffer';
export declare const handleResendRequest: (parser: IFIXParser, messageBuffer: MessageBuffer, message: Message) => void;
