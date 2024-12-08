import { FIXParser } from '../src/FIXParser';
import { FIXServer } from '../src/FIXServer';
import { Logger } from '../src/util/Logger';

import { Field } from '../src/fields/Field';
import { Message } from '../src/message/Message';
import { handleLogon } from '../src/session/SessionLogon';
import { MessageBuffer } from '../src/util/MessageBuffer';
import { timestamp } from '../src/util/util';

import { EncryptMethod } from '../src/fieldtypes/EncryptMethod';
import { Field as FieldType } from '../src/fieldtypes/Field';
import { Message as MessageType } from '../src/fieldtypes/Message';
import { heartBeat } from '../src/messagetemplates/MessageTemplates';
import { handleLogout } from '../src/session/SessionLogout';
import { handleResendRequest } from '../src/session/SessionResendRequest';
import { handleSequenceReset } from '../src/session/SessionSequenceReset';
import { handleTestRequest } from '../src/session/SessionTestRequest';

jest.mock('../src/FIXServer');
const mockFIXServer = FIXServer as jest.MockedClass<typeof FIXServer>;

const mockLogger = Logger as jest.MockedClass<typeof Logger>;
mockFIXServer.prototype.logger = new mockLogger();

const mockSend = jest.fn();
mockFIXServer.prototype.send = mockSend;

jest.mock('../src/FIXParser');
const mockFIXParser = FIXParser as jest.MockedClass<typeof FIXParser>;
mockFIXServer.prototype.fixParser = new mockFIXParser();

jest.mock('../src/messagetemplates/MessageTemplates', () => ({
    heartBeat: jest.fn().mockReturnValue('a heartbeat message'),
}));

describe('FIXParser', () => {
    describe('Session', () => {
        it('Handle Logon (FIXServer)', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.0.0';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXServer';
            mockFIXServerInstance.protocol = 'tcp';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;
            mockFIXServerInstance.nextNumIn = 1;

            const hb1: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 0),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );
            const hb2: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 1),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );
            const hb3: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 2),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );

            const mb = new MessageBuffer();
            mb.add(hb1);
            mb.add(hb2);
            mb.add(hb3);

            expect(mb.size()).toEqual(3);

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Logon),
                new Field(FieldType.MsgSeqNum, 1),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.ResetSeqNumFlag, 'Y'),
                new Field(FieldType.EncryptMethod, EncryptMethod.None),
                new Field(FieldType.HeartBtInt, 112233),
            );
            const result: boolean = handleLogon(mockFIXServerInstance, mb, message);
            expect(result).toBeTruthy();
            expect(mockFIXServerInstance.fixVersion).toEqual(TEST_FIX_VERSION);
            expect(mockFIXServerInstance.fixParser.fixVersion).toEqual(TEST_FIX_VERSION);
            expect(mockFIXServerInstance.fixParser.heartBeatInterval).toEqual(112233);
            expect(mockFIXServerInstance.heartBeatInterval).toEqual(112233);
            expect(mb.size()).toEqual(3);
        });

        it('Handle Logout', () => {
            const fixServer = new FIXServer();

            fixServer.socket = jest.fn();

            const msg = new Message();
            const spyCreateMessage = jest.spyOn(fixServer, 'createMessage').mockReturnValue(msg);
            const spySend = jest.spyOn(fixServer, 'send');

            const SENDER = 'xyz';
            const TARGET = 'abc';
            fixServer.parserName = 'FIXServer';
            fixServer.protocol = 'tcp';
            fixServer.sender = TARGET;
            fixServer.target = SENDER;
            const message = new Message(
                'FIX.0.1',
                new Field(FieldType.BeginString, 'FIX.0.1'),
                new Field(FieldType.MsgType, MessageType.Logout),
                new Field(FieldType.MsgSeqNum, 1),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
                new Field(FieldType.TargetCompID, TARGET),
            );
            handleLogout(fixServer, message);
            expect(spyCreateMessage).toHaveBeenCalled();
            expect(spySend).toHaveBeenCalledWith(msg);
            expect(fixServer.stopHeartbeat).toHaveBeenCalled();
            expect(fixServer.close).toHaveBeenCalled();
        });

        it('Handle Resend Request', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.0.0';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXServer';
            mockFIXServerInstance.protocol = 'tcp';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            const hb1: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 0),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );

            const hb2: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 1),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );
            const hb3: Message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.Heartbeat),
                new Field(FieldType.MsgSeqNum, 2),
                new Field(FieldType.SenderCompID, SENDER),
                new Field(FieldType.TargetCompID, TARGET),
                new Field(FieldType.SendingTime, timestamp(new Date(), new mockLogger())),
            );

            const mb = new MessageBuffer();
            mb.add(hb1);
            mb.add(hb2);
            mb.add(hb3);

            expect(mb.size()).toEqual(3);

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.ResendRequest),
                new Field(FieldType.BeginSeqNo, 1),
                new Field(FieldType.EndSeqNo, 2),
            );
            handleResendRequest(mockFIXServerInstance, mb, message);
            expect(mockFIXServerInstance.send).toHaveBeenCalledTimes(2);
        });

        it('Handle Sequence Reset (FIXServer)', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.4.9';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXServer';
            mockFIXServerInstance.protocol = 'tcp';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.SequenceReset),
                new Field(FieldType.NewSeqNo, 8899),
            );
            handleSequenceReset(mockFIXServerInstance, message);
            expect(mockFIXServerInstance.setNextTargetMsgSeqNum).toHaveBeenCalledWith(8899);
        });

        it('Handle Sequence Reset (FIXParser)', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.4.9';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXParser';
            mockFIXServerInstance.protocol = 'websocket';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.MsgType, MessageType.SequenceReset),
                new Field(FieldType.NewSeqNo, 131072),
            );
            handleSequenceReset(mockFIXServerInstance, message);
            expect(mockFIXServerInstance.nextNumIn).toEqual(131072);
        });

        it('Handle Test Request (FIXServer)', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.4.9';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXServer';
            mockFIXServerInstance.protocol = 'tcp';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.TestReqID, 'This is the test request...'),
            );

            handleTestRequest(mockFIXServerInstance, message);
            expect(heartBeat).toHaveBeenCalledWith(
                mockFIXServerInstance,
                expect.objectContaining({ tag: FieldType.TestReqID, value: 'This is the test request...' }),
            );
            expect(mockFIXServerInstance.send).toHaveBeenCalledWith('a heartbeat message');
        });

        it('Handle Test Request (FIXParser)', () => {
            const mockFIXServerInstance = new mockFIXServer();

            const TEST_FIX_VERSION: string = 'FIX.4.9';
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXParser';
            mockFIXServerInstance.protocol = 'websocket';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            const message = new Message(
                TEST_FIX_VERSION,
                new Field(FieldType.BeginString, TEST_FIX_VERSION),
                new Field(FieldType.TestReqID, 'This is the test request 2...'),
            );

            handleTestRequest(mockFIXServerInstance, message);
            expect(heartBeat).toHaveBeenCalledWith(
                mockFIXServerInstance,
                expect.objectContaining({ tag: FieldType.TestReqID, value: 'This is the test request 2...' }),
            );
            expect(mockFIXServerInstance.send).toHaveBeenCalledWith('a heartbeat message');
        });
    });
});
