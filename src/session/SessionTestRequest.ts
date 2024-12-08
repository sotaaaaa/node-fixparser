import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { Field as FieldType } from '../fieldtypes/Field';
import type { Message } from '../message/Message';
import { heartBeat } from '../messagetemplates/MessageTemplates';

export const handleTestRequest = (parser: IFIXParser, message: Message): void => {
  let heartBeatMessage: Message = heartBeat(parser);
  const testReqIdValue: string | null = message.getField(FieldType.TestReqID)
    ? String(message.getField(FieldType.TestReqID)?.value)
    : null;
  if (testReqIdValue) {
    const testReqId: Field = new Field(FieldType.TestReqID, testReqIdValue);
    heartBeatMessage = heartBeat(parser, testReqId);
    parser.send(heartBeatMessage);
    parser.logger.log({
      level: 'info',
      message: `${
        parser.parserName
      } (${parser.protocol?.toUpperCase()}): >> responded to TestRequest with Heartbeat<TestReqID=${testReqIdValue}>`,
    });
  } else {
    parser.send(heartBeatMessage);
    parser.logger.log({
      level: 'info',
      message: `${parser.parserName} (${parser.protocol?.toUpperCase()}): >> responded to TestRequest with Heartbeat`,
    });
  }
};
