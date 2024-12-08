import type { IFIXParser } from '../IFIXParser';
import { Field as FieldType } from '../fieldtypes/Field';
import type { Message } from '../message/Message';

export const handleSequenceReset = (parser: IFIXParser, message: Message): void => {
  const newSeqNo: number = message.getField(FieldType.NewSeqNo)?.value as number;
  if (newSeqNo && Number.isFinite(newSeqNo)) {
    parser.logger.log({
      level: 'info',
      message: `${
        parser.parserName
      } (${parser.protocol?.toUpperCase()}): -- SequenceReset: new sequence number ${newSeqNo}`,
    });
    if (parser.parserName === 'FIXServer') {
      parser.setNextTargetMsgSeqNum(newSeqNo);
    } else {
      parser.nextNumIn = Number(newSeqNo);
    }
  }
};
