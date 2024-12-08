import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Field as FieldType } from '../fieldtypes/Field';
import { Message as MessageType } from '../fieldtypes/Message';
import type { Message } from '../message/Message';

export const handleLogout = (parser: IFIXParser, message: Message): void => {
  parser.isLoggedIn = false;

  if (!parser.requestedLogout) {
    const logoutAcknowledge: Message = parser.createMessage(
      new Field(FieldType.MsgType, MessageType.Logout),
      new Field(FieldType.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
      new Field(
        FieldType.SenderCompID,
        message.getField(FieldType.SenderCompID)
          ? message.getField(FieldType.SenderCompID)!.value!.toString()
          : parser.sender
      ),
      new Field(FieldType.SendingTime, parser.getTimestamp(new Date())),
      new Field(
        FieldType.TargetCompID,
        message.getField(FieldType.TargetCompID)
          ? message.getField(FieldType.TargetCompID)!.value!.toString()
          : parser.target
      ),
      new Field(FieldType.Text, 'Logout acknowledgement')
    );
    parser.send(logoutAcknowledge);
    parser.logger.log({
      level: 'info',
      message: `FIXServer (${parser.protocol?.toUpperCase()}): >> sent Logout acknowledge`,
    });
  }
  parser.stopHeartbeat();
  parser.close();
};
