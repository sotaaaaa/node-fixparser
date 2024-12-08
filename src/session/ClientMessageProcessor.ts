import type { FIXParser } from '../FIXParser';
import type { FIXParser as FIXParserBrowser } from '../FIXParserBrowser';
import { Message as MessageType } from '../fieldtypes/Message';
import type { Message } from '../message/Message';
import { handleLogon } from './SessionLogon';
import { handleLogout } from './SessionLogout';
import { handleResendRequest } from './SessionResendRequest';
import { handleSequenceReset } from './SessionSequenceReset';
import { handleTestRequest } from './SessionTestRequest';

export const clientProcessMessage = (
  parser: FIXParser | FIXParserBrowser,
  message: Message
): void => {
  parser.nextNumIn++;
  if (
    message.messageSequence !== parser.nextNumIn &&
    message.messageType !== MessageType.SequenceReset &&
    message.messageType !== MessageType.Logon
  ) {
    parser.logger.logWarning({
      message: `FIXParser (${parser.protocol?.toUpperCase()}): -- Expected MsgSeqNum ${parser.nextNumIn}, but got ${
        message.messageSequence
      }`,
    });
  }
  parser.logger.log({
    level: 'info',
    message: `FIXParser (${parser.protocol?.toUpperCase()}): << received ${message.description}`,
    fix: message.encode('|'),
  });
  parser.restartHeartbeat();

  if (message.messageType === MessageType.SequenceReset) {
    handleSequenceReset(parser, message);
  } else if (message.messageType === MessageType.TestRequest) {
    handleTestRequest(parser, message);
  } else if (message.messageType === MessageType.Logon) {
    handleLogon(parser, parser.messageBufferOut, message);
  } else if (message.messageType === MessageType.Logout) {
    handleLogout(parser, message);
  } else if (message.messageType === MessageType.ResendRequest) {
    handleResendRequest(parser, parser.messageBufferOut, message);
  }
};
