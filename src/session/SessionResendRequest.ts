import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Field as FieldType } from '../fieldtypes/Field';
import type { Message } from '../message/Message';
import { MAX_BUFFER, type MessageBuffer } from '../util/MessageBuffer';

export const handleResendRequest = (
  parser: IFIXParser,
  messageBuffer: MessageBuffer,
  message: Message
): void => {
  const from: number | null = message.getField(FieldType.BeginSeqNo)
    ? Number(message.getField(FieldType.BeginSeqNo)?.value)
    : null;
  let to: number | null = message.getField(FieldType.EndSeqNo)
    ? Number(message.getField(FieldType.EndSeqNo)?.value)
    : messageBuffer.size();

  if (to === 0) {
    to = messageBuffer.size();
  }

  if (from && from >= 1 && to <= MAX_BUFFER) {
    let i: number = from;
    for (from; i <= to; i++) {
      const messageBySequence: Message | null = messageBuffer.getByMsgSequence(i);
      if (messageBySequence) {
        messageBySequence.removeFieldByTag(FieldType.PossDupFlag);
        messageBySequence.addField(new Field(FieldType.PossDupFlag, 'Y'));

        if (messageBySequence.getField(FieldType.SendingTime)) {
          const originalSendingTime: string = `${messageBySequence.getField(FieldType.SendingTime)?.value}`;
          messageBySequence.removeFieldByTag(FieldType.SendingTime);
          messageBySequence.addField(
            new Field(FieldType.SendingTime, parser.getTimestamp(new Date()))
          );

          messageBySequence.removeFieldByTag(FieldType.OrigSendingTime);
          messageBySequence.addField(
            new Field(FieldType.OrigSendingTime, originalSendingTime)
          );
        }
        parser.send(messageBySequence);
      } else {
        parser.logger.logWarning({
          message: `${
            parser.parserName
          } (${parser.protocol?.toUpperCase()}): -- Could not find message with sequence ${i}`,
        });
      }
    }
    parser.logger.log({
      level: 'info',
      message: `${parser.parserName} (${parser.protocol?.toUpperCase()}): >> sent Logon acknowledge`,
    });
  } else {
    parser.logger.logWarning({
      message: `${parser.parserName} (${parser.protocol?.toUpperCase()}): -- BeginSeqNo or EndSeqNo out of range`,
    });
  }
};
