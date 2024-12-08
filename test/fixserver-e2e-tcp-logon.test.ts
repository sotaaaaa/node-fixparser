import { FIXParser } from '../src/FIXParser';
import { EncryptMethod, FIXServer, Field, Fields, type Message, Messages } from '../src/FIXServer';

jest.setTimeout(30000);

describe('FIXServer TCP', () => {
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
    });
    it('End-to-end: connect and Logon', (done) => {
        const fixServer: FIXServer = new FIXServer();
        const fixParser: FIXParser = new FIXParser();
        const HOST: string = 'localhost';

        // Start up a server
        fixServer.createServer({
            host: HOST,
            port: 9801,
            protocol: 'tcp',
            sender: 'SERVER',
            target: 'CLIENT',
            logging: false,
            onReady: () => {
                // Connect with a client
                fixParser.connect({
                    host: HOST,
                    port: 9801,
                    protocol: 'tcp',
                    sender: 'CLIENT',
                    target: 'SERVER',
                    fixVersion: 'FIX.4.7',
                    logging: false,
                    onOpen: () => {
                        // Send a Logon message
                        const logon: Message = fixParser.createMessage(
                            new Field(Fields.MsgType, Messages.Logon),
                            new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
                            new Field(Fields.SenderCompID, fixParser.sender),
                            new Field(Fields.SendingTime, fixParser.getTimestamp()),
                            new Field(Fields.TargetCompID, fixParser.target),
                            new Field(Fields.ResetSeqNumFlag, 'Y'),
                            new Field(Fields.EncryptMethod, EncryptMethod.None),
                            new Field(Fields.HeartBtInt, 64),
                        );
                        fixParser.send(logon);
                    },
                    onMessage: (message: Message) => {
                        expect(message.description).toEqual('Logon');
                        expect(message.messageString).toMatchSnapshot();
                        expect(fixServer.heartBeatInterval).toEqual(64);
                        expect(fixServer.fixVersion).toEqual('FIX.4.7');
                        fixParser.close();
                        fixServer.destroy();
                        done();
                    },
                    onError: (error?: Error) => console.log('FIXParser: ', error),
                });
            },
            onMessage: (message: Message) => {
                expect(message.description).toEqual('Logon');
                expect(message.messageString).toMatchSnapshot();
            },
        });
    });
});
