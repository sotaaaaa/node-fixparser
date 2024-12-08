import { FIXServer } from '../src/FIXServer';

import { Field as FieldType } from '../src/fieldtypes/Field';
import { heartBeat } from '../src/messagetemplates/MessageTemplates';

jest.mock('../src/FIXServer');
const mockFIXServer = FIXServer as jest.MockedClass<typeof FIXServer>;

describe('FIXParser', () => {
    describe('Templates', () => {
        it('Create HeartBeat message', () => {
            const mockFIXServerInstance = new mockFIXServer();
            const SENDER = 'abc';
            const TARGET = 'xyz';

            mockFIXServerInstance.parserName = 'FIXServer';
            mockFIXServerInstance.protocol = 'tcp';
            mockFIXServerInstance.sender = TARGET;
            mockFIXServerInstance.target = SENDER;

            heartBeat(mockFIXServerInstance);

            expect(mockFIXServerInstance.createMessage).toHaveBeenCalledWith(
                expect.objectContaining({ tag: FieldType.BeginString }),
                expect.objectContaining({ tag: FieldType.MsgType }),
                expect.objectContaining({ tag: FieldType.MsgSeqNum }),
                expect.objectContaining({ tag: FieldType.SenderCompID }),
                expect.objectContaining({ tag: FieldType.TargetCompID }),
                expect.objectContaining({ tag: FieldType.SendingTime }),
            );
        });
    });
});
