import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Message } from '../message/Message';
export declare const heartBeat: (parser: IFIXParser, testReqId?: Field) => Message;
