import type { IFIXParser } from '../IFIXParser';
import { Field } from '../fields/Field';
import { EncryptMethod } from '../fieldtypes/EncryptMethod';
import { Field as FieldType } from '../fieldtypes/Field';
import { Message as MessageType } from '../fieldtypes/Message';
import type { Message } from '../message/Message';
import type { MessageBuffer } from '../util/MessageBuffer';

export const handleLogon = (
  parser: IFIXParser,
  messageBuffer: MessageBuffer,
  message: Message
): boolean => {
  if (parser.isLoggedIn) {
    if (parser.connectionType === 'acceptor') {
      if (
        message.getField(FieldType.ResetSeqNumFlag) &&
        message.getField(FieldType.ResetSeqNumFlag)!.value!.toString() === 'Y'
      ) {
        parser.logger.log({
          level: 'info',
          message: `FIXServer (${parser.protocol!.toUpperCase()}): -- Logon acknowledged by acceptor.`,
        });
        parser.nextNumIn = 1;
      }
    } else {
      parser.logger.log({
        level: 'info',
        message: `FIXServer (${parser.protocol!.toUpperCase()}): -- Logon acknowledged by initiator.`,
      });
    }
    return true;
  }

  const fixVersion: string | null = String(
    message.getField(FieldType.BeginString)?.value
  );
  let validSender = true;
  let validTarget = true;

  if (fixVersion) {
    parser.logger.log({
      level: 'info',
      message: `FIXServer (${parser.protocol?.toUpperCase()}): -- FIX version set to ${fixVersion}`,
    });
    parser.fixVersion = fixVersion;
    if (parser.fixParser) {
      parser.fixParser.fixVersion = fixVersion;
    }
  }

  const target: string | null = message.getField(FieldType.TargetCompID)
    ? message.getField(FieldType.TargetCompID)!.value!.toString()
    : parser.sender;
  const sender: string | null = message.getField(FieldType.SenderCompID)
    ? message.getField(FieldType.SenderCompID)!.value!.toString()
    : parser.target;
  if (target && target !== parser.sender) {
    parser.logger.logWarning({
      message: `FIXServer (${parser.protocol!.toUpperCase()}): -- Expected TargetCompID=${
        parser.sender
      }, but got ${target}`,
    });
    validTarget = false;
  }
  if (sender && sender !== parser.target) {
    parser.logger.logWarning({
      message: `FIXServer (${parser.protocol?.toUpperCase()}): -- Expected SenderCompID=${
        parser.target
      }, but got ${sender}`,
    });
    validSender = false;
  }

  if (validSender && validTarget) {
    if (parser.connectionType === 'acceptor') {
      parser.nextNumIn = 1;
      parser.setNextTargetMsgSeqNum(1);

      const logonAcknowledge: Message = parser.createMessage(
        new Field(FieldType.MsgType, MessageType.Logon),
        new Field(FieldType.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
        new Field(FieldType.SenderCompID, target),
        new Field(FieldType.SendingTime, parser.getTimestamp(new Date())),
        new Field(FieldType.TargetCompID, sender),
        new Field(FieldType.ResetSeqNumFlag, 'Y'),
        new Field(FieldType.EncryptMethod, EncryptMethod.None),
        new Field(
          FieldType.HeartBtInt,
          message.getField(FieldType.HeartBtInt)
            ? (message.getField(FieldType.HeartBtInt)?.value as number)
            : parser.heartBeatInterval
        )
      );
      parser.send(logonAcknowledge);
      parser.logger.log({
        level: 'info',
        message: `FIXServer (${parser.protocol?.toUpperCase()}): >> sent Logon acknowledge`,
      });
    } else {
      if (
        message.getField(FieldType.ResetSeqNumFlag) &&
        message.getField(FieldType.ResetSeqNumFlag)?.value?.toString() === 'Y'
      ) {
        parser.logger.log({
          level: 'info',
          message: `FIXServer (${parser.protocol?.toUpperCase()}): -- Logon contains ResetSeqNumFlag=Y, resetting sequence numbers to 1`,
        });
        parser.nextNumIn = 1;
        parser.setNextTargetMsgSeqNum(2);
      }
    }

    parser.isLoggedIn = true;
    parser.logger.log({
      level: 'info',
      message: `FIXServer (${parser.protocol?.toUpperCase()}): >> Logon successful by ${parser.connectionType}`,
    });
    const heartBeatInterval: number = message.getField(FieldType.HeartBtInt)
      ? Number(message.getField(FieldType.HeartBtInt)?.value!)
      : parser.heartBeatInterval;
    parser.heartBeatInterval = heartBeatInterval;
    if (parser.fixParser) {
      parser.fixParser.heartBeatInterval = heartBeatInterval;
    }
    parser.startHeartbeat(heartBeatInterval);
    return true;
  }
  const logonReject: Message = parser.createMessage(
    new Field(FieldType.MsgType, MessageType.Logout),
    new Field(FieldType.MsgSeqNum, parser.getNextTargetMsgSeqNum()),
    new Field(FieldType.SenderCompID, validSender ? sender : 'INVALID_SENDER'),
    new Field(FieldType.SendingTime, parser.getTimestamp(new Date())),
    new Field(FieldType.TargetCompID, validTarget ? target : 'INVALID_TARGET'),
    new Field(FieldType.Text, 'Invalid Logon TARGET or SENDER.')
  );
  parser.isLoggedIn = false;
  parser.send(logonReject);
  parser.logger.logWarning({
    message: `FIXServer (${parser.protocol?.toUpperCase()}): >> sent Logout due to invalid Logon`,
  });
  parser.stopHeartbeat();
  parser.close();
  return false;
};
