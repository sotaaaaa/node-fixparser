import { type FIXServer } from '../FIXServer';
import type { Message } from '../message/Message';
export declare const serverProcessMessage: (parser: FIXServer, message: Message) => void;
