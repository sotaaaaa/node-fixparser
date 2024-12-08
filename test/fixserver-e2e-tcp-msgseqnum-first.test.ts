import { FIXParser, HandlInst, OrdType, Side, TimeInForce } from '../src/FIXParser';
import { FIXServer, Field, Fields, type Message, Messages } from '../src/FIXServer';
import { Field as FieldType } from '../src/fieldtypes/Field';

jest.setTimeout(30000);

describe('FIXServer TCP', () => {
    let fixServer: FIXServer;
    afterEach(() => {
        jest.clearAllMocks();
        jest.restoreAllMocks();
        if (fixServer) {
            fixServer.destroy();
        }
    });
    it('End-to-end: first message not a Logon', (done) => {
        fixServer = new FIXServer();
        const fixParser: FIXParser = new FIXParser();
        const HOST: string = 'localhost';

        // Start up a server
        fixServer.createServer({
            host: HOST,
            port: 9804,
            protocol: 'tcp',
            sender: 'SERVER',
            target: 'CLIENT',
            logging: false,
            onMessage: (message: Message) => {
                expect(message.description).toEqual('NewOrderSingle');
                expect(message.messageString).toMatchSnapshot();
            },
            onReady: () => {
                // Connect with a client
                fixParser.connect({
                    host: HOST,
                    port: 9804,
                    protocol: 'tcp',
                    sender: 'CLIENT',
                    target: 'SERVER',
                    fixVersion: 'FIX.4.8',
                    logging: false,
                    onOpen: () => {
                        // Send anything but a Logon
                        const wrongFirstMessage = fixParser.createMessage(
                            new Field(Fields.MsgType, Messages.NewOrderSingle),
                            new Field(Fields.MsgSeqNum, fixParser.getNextTargetMsgSeqNum()),
                            new Field(Fields.SenderCompID, fixParser.sender),
                            new Field(Fields.SendingTime, fixParser.getTimestamp()),
                            new Field(Fields.TargetCompID, fixParser.target),
                            new Field(Fields.ClOrdID, '11223344'),
                            new Field(Fields.HandlInst, HandlInst.AutomatedExecutionNoIntervention),
                            new Field(Fields.OrderQty, '123'),
                            new Field(Fields.TransactTime, fixParser.getTimestamp()),
                            new Field(Fields.OrdType, OrdType.Market),
                            new Field(Fields.Side, Side.Buy),
                            new Field(Fields.Symbol, '700.HK'),
                            new Field(Fields.TimeInForce, TimeInForce.Day),
                        );
                        fixParser.send(wrongFirstMessage);
                    },
                    onMessage: (message: Message) => {
                        expect(message.description).toEqual('Logout');
                        expect(message.messageString).toMatchSnapshot();
                        expect(message.getField(FieldType.Text)!.value).toEqual('First message not a Logon');
                        expect(fixServer.heartBeatInterval).toEqual(30);
                        expect(fixServer.fixVersion).toEqual('FIXT.1.1');
                        fixParser.close();
                        fixServer.destroy();
                        done();
                    },
                    onError: (error?: Error) => console.log('FIXParser: ', error),
                });
            },
        });
    });
});
