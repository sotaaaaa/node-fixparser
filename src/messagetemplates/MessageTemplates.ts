import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Field as FieldType } from '../fieldtypes/Field';
import { Message as MessageType } from '../fieldtypes/Message';
import { Message } from '../message/Message';

export const heartBeat = (parser: IFIXParser, testReqId?: Field): Message => {
  const fields: Field[] = [
    new Field(FieldType.BeginString, parser.fixVersion),
    new Field(FieldType.MsgType, MessageType.Heartbeat),
    new Field(FieldType.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
    new Field(FieldType.SenderCompID, parser.sender),
    new Field(FieldType.TargetCompID, parser.target),
    new Field(FieldType.SendingTime, parser.getTimestamp(new Date())),
  ];

  if (testReqId) {
    fields.push(testReqId);
  }

  return parser.createMessage(...fields);
};
