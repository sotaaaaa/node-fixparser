import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Field as FieldType } from '../fieldtypes/Field';
import { Message as MessageType } from '../fieldtypes/Message';
import type { Message } from '../message/Message';

export const handleSequence = (parser: IFIXParser, message: Message): boolean => {
  if (
    message.messageSequence !== parser.nextNumIn &&
    !(parser.connectionType === 'acceptor' && message.messageType === MessageType.Logon)
  ) {
    parser.logger.logWarning({
      message: `FIXServer (${parser.protocol?.toUpperCase()}): Expected MsgSeqNum ${parser.nextNumIn}, but got ${
        message.messageSequence
      }`,
    });

    // Message has wrong sequence, respond with ResendRequest
    const resendRequest: Message = parser.createMessage(
      new Field(FieldType.MsgType, MessageType.ResendRequest),
      new Field(FieldType.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
      new Field(FieldType.SenderCompID, parser.sender),
      new Field(FieldType.SendingTime, parser.getTimestamp(new Date())),
      new Field(FieldType.TargetCompID, parser.target),
      new Field(FieldType.BeginSeqNo, parser.getNextTargetMsgSeqNum()),
      new Field(FieldType.EndSeqNo, 0)
    );
    parser.logger.log({
      level: 'info',
      message: `FIXServer (${parser.protocol?.toUpperCase()}): Sending ResendRequest from ${parser.getNextTargetMsgSeqNum()} to 0`,
    });
    parser.send(resendRequest);
    return false;
  }
  return true;
};
