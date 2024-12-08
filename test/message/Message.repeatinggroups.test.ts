import { FIXParser, Fields, MDEntryType, MDUpdateType, SubscriptionRequestType } from '../../src/FIXParser';
import { Field } from '../../src/fields/Field';
import { Message as MessageType } from '../../src/fieldtypes/Message';
import { Message } from '../../src/message/Message';

describe('Message', () => {
    const fixParser = new FIXParser();
    const fixVersion: string = 'FIX.4.4';
    const fields: Field[] = [
        new Field(Fields.BeginString, fixVersion),
        new Field(Fields.MsgType, MessageType.MarketDataRequest),
        new Field(Fields.MsgSeqNum, 1),
        new Field(Fields.SenderCompID, 'SENDER'),
        new Field(Fields.TargetCompID, 'TARGET'),
        new Field(Fields.SendingTime, '20090323-15:40:29'),
        new Field(Fields.MDReqID, 1),
        new Field(Fields.SubscriptionRequestType, SubscriptionRequestType.SnapshotAndUpdates),
        new Field(Fields.MarketDepth, 0),
        new Field(Fields.MDUpdateType, MDUpdateType.FullRefresh),

        new Field(Fields.NoMDEntries, 5),
        new Field(Fields.MDEntryType, MDEntryType.Bid),
        new Field(Fields.MDEntryType, MDEntryType.Offer),
        new Field(Fields.MDEntryType, MDEntryType.MarketBid),
        new Field(Fields.MDEntryType, MDEntryType.MarketOffer),
        new Field(Fields.MDEntryType, MDEntryType.TradeVolume),

        new Field(Fields.NoRelatedSym, 5),
        new Field(Fields.Symbol, 1),
        new Field(Fields.Symbol, 2),
        new Field(Fields.Symbol, 3),
        new Field(Fields.Symbol, 4),
        new Field(Fields.Symbol, 5),
    ];
    const newMessage: Message = new Message(fixVersion, ...fields);
    const encoded: string = newMessage.encode();
    const message: Message = fixParser.parse(encoded)[0];

    it('#getBriefDescription()', () => {
        expect(message.getBriefDescription()).toEqual('MarketDataRequest');
    });

    it('#getField()', () => {
        expect(message.getField(Fields.MsgSeqNum)!.tag).toEqual(fields[2].tag);
        expect(message.getField(Fields.MsgSeqNum)!.value).toEqual(fields[2].value);
    });

    it('#getFields()', () => {
        expect(message.getFields(Fields.MsgSeqNum)!.length).toEqual(1);
        expect(message.getFields(Fields.MsgSeqNum)![0].tag).toEqual(fields[2].tag);
        expect(message.getFields(Fields.MsgSeqNum)![0].value).toEqual(fields[2].value);
    });

    it('#getFieldValues()', () => {
        expect(message.getFieldValues()).toEqual({
            8: 'FIX.4.4',
            10: '062',
            34: 1,
            35: 'V',
            49: 'SENDER',
            56: 'TARGET',
            52: '20090323-15:40:29',
            264: 0,
            265: '0',
            146: 5,
            262: '1',
            263: '1',
            268: 5,
            269: ['0', '1', 'b', 'c', 'B'],
            55: ['1', '2', '3', '4', '5'],
            9: 142,
        });
    });

    it('#getFieldNameValues()', () => {
        expect(message.getFieldNameValues()).toEqual({
            BeginString: 'FIX.4.4',
            BodyLength: 142,
            CheckSum: '062',
            MsgSeqNum: 1,
            MsgType: 'V',
            SenderCompID: 'SENDER',
            SendingTime: '20090323-15:40:29',
            TargetCompID: 'TARGET',
            SubscriptionRequestType: '1',
            MarketDepth: 0,
            MDReqID: '1',
            MDUpdateType: '0',
            NoMDEntries: 5,
            MDEntryType: ['0', '1', 'b', 'c', 'B'],
            NoRelatedSym: 5,
            Symbol: ['1', '2', '3', '4', '5'],
        });
    });

    it('#getFieldExplains()', () => {
        expect(message.getFieldExplains()).toEqual({
            BeginString: 'FIX44',
            BodyLength: 142,
            CheckSum: '062',
            MsgSeqNum: 1,
            MsgType: 'MarketDataRequest',
            SenderCompID: 'SENDER',
            SendingTime: '20090323-15:40:29',
            TargetCompID: 'TARGET',
            SubscriptionRequestType: 'SnapshotAndUpdates',
            MarketDepth: 0,
            MDReqID: '1',
            MDUpdateType: 'FullRefresh',
            NoMDEntries: 5,
            MDEntryType: ['Bid', 'Offer', 'MarketBid', 'MarketOffer', 'TradeVolume'],
            NoRelatedSym: 5,
            Symbol: ['1', '2', '3', '4', '5'],
        });
    });

    xit('#toFIXJSON() - multiple groups', () => {
        expect(message.toFIXJSON()).toEqual({
            Header: {
                BeginString: 'FIX.4.4',
                MsgType: 'V',
                BodyLength: 142,
                MsgSeqNum: 1,
                SenderCompID: 'SENDER',
                TargetCompID: 'TARGET',
                SendingTime: '20090323-15:40:29',
            },
            Body: {
                MDReqID: '1',
                MDUpdateType: '0',
                MarketDepth: 0,
                NoMDEntries: [
                    { MDEntryType: 'Bid' },
                    { MDEntryType: 'Offer' },
                    { MDEntryType: 'MarketBid' },
                    { MDEntryType: 'MarketOffer' },
                    { MDEntryType: 'TradeVolume' },
                ],
                NoRelatedSym: [{ Symbol: '1' }, { Symbol: '2' }, { Symbol: '3' }, { Symbol: '4' }, { Symbol: '5' }],
                SubscriptionRequestType: '1',
            },
            Trailer: {
                CheckSum: '062',
            },
        });
    });

    xit('#toFIXJSON() - group with single instance', () => {
        const fields: Field[] = [
            new Field(Fields.BeginString, fixVersion),
            new Field(Fields.MsgType, MessageType.MarketDataRequest),
            new Field(Fields.MsgSeqNum, 1),
            new Field(Fields.SenderCompID, 'SENDER'),
            new Field(Fields.TargetCompID, 'TARGET'),
            new Field(Fields.SendingTime, '20090323-15:40:29'),
            new Field(Fields.MarketDepth, 0),
            new Field(Fields.MDUpdateType, MDUpdateType.FullRefresh),
            new Field(Fields.SubscriptionRequestType, 1),

            new Field(Fields.NoMDEntries, 1),
            new Field(Fields.MDEntryType, MDEntryType.TradeVolume),
            new Field(Fields.MDReqID, 1),
        ];
        const newMessage: Message = new Message(fixVersion, ...fields);
        const encoded: string = newMessage.encode();
        const message: Message = fixParser.parse(encoded)[0];

        expect(message.toFIXJSON()).toEqual({
            Header: {
                BeginString: 'FIX.4.4',
                MsgType: 'V',
                BodyLength: 87,
                MsgSeqNum: 1,
                SenderCompID: 'SENDER',
                TargetCompID: 'TARGET',
                SendingTime: '20090323-15:40:29',
            },
            Body: {
                MDUpdateType: '0',
                MarketDepth: 0,
                NoMDEntries: [{ MDEntryType: 'TradeVolume' }],
                MDReqID: '1',
                SubscriptionRequestType: '1',
            },
            Trailer: {
                CheckSum: '027',
            },
        });
    });

    xit('#toFIXJSON() - varied instance fields', () => {
        const fields: Field[] = [
            new Field(Fields.BeginString, 'FIXT.1.1'),
            new Field(Fields.MsgType, MessageType.MarketDataSnapshotFullRefresh),
            new Field(Fields.MsgSeqNum, 4567),
            new Field(Fields.SenderCompID, 'SENDER'),
            new Field(Fields.TargetCompID, 'TARGET'),
            new Field(Fields.SendingTime, '20160802-21:14:38.717'),

            new Field(Fields.SecurityIDSource, '8'),
            new Field(Fields.SecurityID, 'ESU6'),
            new Field(Fields.MDReqID, '789'),

            new Field(Fields.NoMDEntries, 2),

            new Field(Fields.MDEntryType, MDEntryType.Bid),
            new Field(Fields.MDEntryPx, '2179.75'),
            new Field(Fields.MDEntryTime, '21:14:38.688'),

            new Field(Fields.MDEntryType, MDEntryType.Offer),
            new Field(Fields.MDEntryPx, '2180.25'),
            new Field(Fields.MDEntrySize, '125'),
            new Field(Fields.MDEntryDate, '20160812'),
            new Field(Fields.MDEntryTime, '21:15:12.332'),
        ];
        const newMessage: Message = new Message(fixVersion, ...fields);
        const encoded: string = newMessage.encode();
        const message: Message = fixParser.parse(encoded)[0];

        expect(message.toFIXJSON()).toEqual({
            Header: {
                BeginString: 'FIXT.1.1',
                MsgType: 'W',
                BodyLength: 176,
                MsgSeqNum: 4567,
                SenderCompID: 'SENDER',
                TargetCompID: 'TARGET',
                SendingTime: '20160802-21:14:38.717',
            },
            Body: {
                SecurityIDSource: '8',
                SecurityID: 'ESU6',
                MDReqID: '789',
                NoMDEntries: [
                    {
                        MDEntryType: 'Bid',
                        MDEntryPx: 2179.75,
                        MDEntryTime: '21:14:38.688',
                    },
                    {
                        MDEntryType: 'Offer',
                        MDEntryPx: 2180.25,
                        MDEntrySize: 125,
                        MDEntryDate: '20160812',
                        MDEntryTime: '21:15:12.332',
                    },
                ],
            },
            Trailer: {
                CheckSum: '244',
            },
        });
    });

    xit('#toFIXJSON()', () => {
        const fields: Field[] = [
            new Field(Fields.BeginString, 'FIXT.1.1'),
            new Field(Fields.MsgType, MessageType.MarketDataSnapshotFullRefresh),
            new Field(Fields.MsgSeqNum, 4567),
            new Field(Fields.SenderCompID, 'SENDER'),
            new Field(Fields.TargetCompID, 'TARGET'),
            new Field(Fields.SendingTime, '20160802-21:14:38.717'),

            new Field(Fields.SecurityIDSource, '8'),
            new Field(Fields.SecurityID, 'ESU6'),
            new Field(Fields.MDReqID, '789'),

            new Field(Fields.NoMDEntries, 2),

            new Field(Fields.MDEntryType, MDEntryType.Bid),
            new Field(Fields.MDEntryPx, '2179.75'),
            new Field(Fields.MDEntrySize, '175'),
            new Field(Fields.MDEntryDate, '20160812'),
            new Field(Fields.MDEntryTime, '21:14:38.688'),

            new Field(Fields.MDEntryType, MDEntryType.Offer),
            new Field(Fields.MDEntryPx, '2180.25'),
            new Field(Fields.MDEntrySize, '125'),
            new Field(Fields.MDEntryDate, '20160812'),
            new Field(Fields.MDEntryTime, '21:14:38.688'),
        ];
        const newMessage: Message = new Message(fixVersion, ...fields);
        const encoded: string = newMessage.encode();
        const message: Message = fixParser.parse(encoded)[0];

        expect(message.toFIXJSON()).toEqual({
            Header: {
                BeginString: 'FIXT.1.1',
                MsgType: 'W',
                BodyLength: 197,
                MsgSeqNum: 4567,
                SenderCompID: 'SENDER',
                TargetCompID: 'TARGET',
                SendingTime: '20160802-21:14:38.717',
            },
            Body: {
                SecurityIDSource: '8',
                SecurityID: 'ESU6',
                MDReqID: '789',
                NoMDEntries: [
                    {
                        MDEntryType: 'Bid',
                        MDEntryPx: 2179.75,
                        MDEntrySize: 175,
                        MDEntryDate: '20160812',
                        MDEntryTime: '21:14:38.688',
                    },
                    {
                        MDEntryType: 'Offer',
                        MDEntryPx: 2180.25,
                        MDEntrySize: 125,
                        MDEntryDate: '20160812',
                        MDEntryTime: '21:14:38.688',
                    },
                ],
            },
            Trailer: {
                CheckSum: '238',
            },
        });
    });

    xit('#toFIXJSON() - nested groups, varied instance fields', () => {
        const fields: Field[] = [
            new Field(Fields.BeginString, 'FIXT.1.1'),
            new Field(Fields.MsgType, MessageType.MarketDataSnapshotFullRefresh),
            new Field(Fields.MsgSeqNum, 4567),
            new Field(Fields.SenderCompID, 'SENDER'),
            new Field(Fields.TargetCompID, 'TARGET'),
            new Field(Fields.SendingTime, '20160802-21:14:38.717'),

            new Field(Fields.NoPartyIDs, 3),

            /* */ new Field(Fields.PartyID, 'DEU'),
            /* */ new Field(Fields.PartyIDSource, 'B'), // (Bank Identifier Code (BIC) ISO 9362)
            /* */ new Field(Fields.PartyRole, 1), // (Executing Firm)
            /* */ new Field(Fields.NoPartySubIDs, 1),
            /* */ /* */ new Field(Fields.PartySubID, 'A1'),
            /* */ /* */ new Field(Fields.PartySubIDType, 10), // (Securities account number)

            /* */ new Field(Fields.PartyID, 104317),
            /* */ new Field(Fields.PartyIDSource, 'H'), // (CSD Participant Number)
            /* */ new Field(Fields.PartyRole, 83), // (Clearing Account)

            /* */ new Field(Fields.PartyID, 'GSI'),
            /* */ new Field(Fields.PartyIDSource, 'B'), // (Bank Identifier Code (BIC) ISO 9362)
            /* */ new Field(Fields.PartyRole, 4), // (Clearing Firm)
            /* */ new Field(Fields.PartyRoleQualifier, 23), //  (Firm or legal entity)
            /* */ new Field(Fields.NoPartySubIDs, 1),
            /* */ /* */ new Field(Fields.PartySubID, 'C3'),
            /* */ /* */ new Field(Fields.PartySubIDType, 10), // (Securities account number)
        ];
        const newMessage: Message = new Message(fixVersion, ...fields);
        const encoded: string = newMessage.encode('|');
        const message: Message = fixParser.parse(encoded)[0];

        expect(encoded).toEqual(
            '8=FIXT.1.1|9=176|35=W|34=4567|49=SENDER|56=TARGET|52=20160802-21:14:38.717|453=3|448=DEU|447=B|452=1|802=1|523=A1|803=10|448=104317|447=H|452=83|448=GSI|447=B|452=4|2376=23|802=1|523=C3|803=10|10=034|',
        );

        expect(message.toFIXJSON()).toEqual({
            Header: {
                BeginString: 'FIXT.1.1',
                BodyLength: 176,
                MsgSeqNum: 4567,
                MsgType: 'W',
                SenderCompID: 'SENDER',
                SendingTime: '20160802-21:14:38.717',
                TargetCompID: 'TARGET',
            },
            Body: {
                NoPartyIDs: [
                    {
                        PartyID: 'DEU',
                        PartyIDSource: 'B',
                        PartyRole: 1,
                        NoPartySubIDs: [
                            {
                                PartySubID: 'A1',
                                PartySubIDType: 10,
                            },
                        ],
                    },
                    {
                        PartyID: 104317,
                        PartyIDSource: 'H',
                        PartyRole: 83,
                    },
                    {
                        PartyID: 'GSI',
                        PartyIDSource: 'B',
                        PartyRole: 4,
                        PartyRoleQualifier: 23,
                        NoPartySubIDs: [
                            {
                                PartySubID: 'C3',
                                PartySubIDType: 10,
                            },
                        ],
                    },
                ],
            },
            Trailer: {
                CheckSum: '034',
            },
        });
    });
});
