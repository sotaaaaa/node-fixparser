import { type FIXServer } from '../FIXServer';
import { Message as MessageType } from '../fieldtypes/Message';
import type { Message } from '../message/Message';
import { handleFirstMessage } from './SessionFirstMessage';
import { handleLogon } from './SessionLogon';
import { handleLogout } from './SessionLogout';
import { handleResendRequest } from './SessionResendRequest';
import { handleSequence } from './SessionSequence';
import { handleSequenceReset } from './SessionSequenceReset';
import { handleTestRequest } from './SessionTestRequest';

export const serverProcessMessage = (parser: FIXServer, message: Message): void => {
  handleSequence(parser, message);
  parser.logger.log({
    level: 'info',
    message: `FIXServer (${parser.protocol?.toUpperCase()}): << received ${
      message.description
    }`,
    fix: message.encode('|'),
  });

  parser.restartHeartbeat();

  if (parser.messageCounter === 0 && !handleFirstMessage(parser, message)) {
    parser.logger.logError({
      message: `FIXServer (${parser.protocol.toUpperCase()}): First message not a logon!`,
    });
    return;
  }
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
  parser.nextNumIn++;
  parser.messageCounter++;
};
