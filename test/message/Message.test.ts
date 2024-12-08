import { FIXParser } from '../../src/FIXParser';
import { Field } from '../../src/fields/Field';
import { Field as FieldType } from '../../src/fieldtypes/Field';
import { Message as MessageType } from '../../src/fieldtypes/Message';
import { Message } from '../../src/message/Message';

describe('Message', () => {
    const fixParser = new FIXParser();
    const fixVersion: string = 'FIX.4.4';
    const fields: Field[] = [
        new Field(FieldType.BeginString, fixVersion),
        new Field(FieldType.MsgType, MessageType.Heartbeat),
        new Field(FieldType.MsgSeqNum, 1),
        new Field(FieldType.SenderCompID, 'SENDER'),
        new Field(FieldType.TargetCompID, 'TARGET'),
        new Field(FieldType.SendingTime, '20090323-15:40:29'),
    ];
    const newMessage: Message = new Message(fixVersion, ...fields);
    const encoded: string = newMessage.encode();
    const message: Message = fixParser.parse(encoded)[0];

    it('#getBriefDescription()', () => {
        expect(message.getBriefDescription()).toEqual('Heartbeat');
    });

    it('#getField()', () => {
        expect(message.getField(FieldType.MsgSeqNum)!.tag).toEqual(fields[2].tag);
        expect(message.getField(FieldType.MsgSeqNum)!.value).toEqual(fields[2].value);
    });

    it('#getFields()', () => {
        expect(message.getFields(FieldType.MsgSeqNum)!.length).toEqual(1);
        expect(message.getFields(FieldType.MsgSeqNum)![0].tag).toEqual(fields[2].tag);
        expect(message.getFields(FieldType.MsgSeqNum)![0].value).toEqual(fields[2].value);
    });

    it('#getFieldValues()', () => {
        expect(message.getFieldValues()).toEqual({
            8: 'FIX.4.4',
            10: '148',
            34: 1,
            35: '0',
            49: 'SENDER',
            52: '20090323-15:40:29',
            56: 'TARGET',
            9: 51,
        });
    });

    it('#getFieldNameValues()', () => {
        expect(message.getFieldNameValues()).toEqual({
            BeginString: 'FIX.4.4',
            BodyLength: 51,
            CheckSum: '148',
            MsgSeqNum: 1,
            MsgType: '0',
            SenderCompID: 'SENDER',
            SendingTime: '20090323-15:40:29',
            TargetCompID: 'TARGET',
        });
    });

    it('#getFieldExplains()', () => {
        expect(message.getFieldExplains()).toEqual({
            BeginString: 'FIX44',
            BodyLength: 51,
            CheckSum: '148',
            MsgSeqNum: 1,
            MsgType: 'Heartbeat',
            SenderCompID: 'SENDER',
            SendingTime: '20090323-15:40:29',
            TargetCompID: 'TARGET',
        });
    });

    describe('#validate()', () => {
        it('valid', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=51|35=0|34=1|49=SENDER|56=TARGET|52=20090323-15:40:29|10=148|',
            )[0];

            expect(message.validate()).toEqual([]);
        });

        it('valid (two messages)', () => {
            const messages: Message[] = fixParser.parse(
                '8=FIX.4.2|9=83|35=A|34=702|49=ABC|52=20100130-10:52:40.663|56=XYZ|1128=9|95=4|96=1234|98=0|108=60|10=199|8=FIX.4.2|9=51|35=0|34=703|49=ABC|52=20100130-10:53:40.830|56=XYZ|10=249|',
            );

            expect(messages[0].validate()).toEqual([]);
            expect(messages[1].validate()).toEqual([]);
        });

        it('valid - unknown field', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=64|35=0|34=1|49=SENDER|4393939=BLAH|56=TARGET|52=20090323-15:40:29|10=101|',
            )[0];

            expect(message.validate()).toEqual([]);
        });

        it('invalid - wrong BodyLength', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=99999|35=0|34=1|49=SENDER|56=TARGET|52=20090323-15:40:29|10=075|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        abbrName: 'BodyLength',
                        type: 'Length',
                        added: 'FIX.2.7',
                        name: 'BodyLength',
                        id: 9,
                        description:
                            'Message length, in bytes, forward to the CheckSum field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted)',
                    },
                    name: 'BodyLength',
                    tag: 9,
                    value: 99999,
                    expectedValue: 51,
                    error: 'Incorrect value for BodyLength',
                },
            ]);
        });

        it('invalid - unknown message type', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=61|35=FFFFFFFFFFF|34=1|49=SENDER|56=TARGET|52=20090323-15:40:29|10=103|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        abbrName: 'MsgTyp',
                        type: 'MsgTypeCodeSet',
                        added: 'FIX.2.7',
                        name: 'MsgType',
                        id: 35,
                        description:
                            'Defines message type ALWAYS THIRD FIELD IN MESSAGE. (Always unencrypted)\n\nNote: A "U" as the first character in the MsgType field (i.e. U, U2, etc) indicates that the message format is privately defined between the sender and receiver.\n\n*** Note the use of lower case letters ***',
                    },
                    name: 'MsgType',
                    tag: 35,
                    value: 'FFFFFFFFFFF',
                    error: 'Incorrect data format for value',
                },
            ]);
        });

        it('invalid - wrong type for MsgSeqNum', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=51|35=0|34=A|49=SENDER|56=TARGET|52=20090323-15:40:29|10=164|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        abbrName: 'SeqNum',
                        added: 'FIX.2.7',
                        description: 'Integer message sequence number.',
                        id: 34,
                        name: 'MsgSeqNum',
                        type: 'SeqNum',
                    },
                    name: 'MsgSeqNum',
                    tag: 34,
                    value: Number.NaN,
                    error: 'Incorrect data format for value',
                },
            ]);
        });

        it('invalid - missing field sender', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=41|35=0|34=1|56=TARGET|52=20090323-15:40:29|10=039|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        added: 'FIX.4.0',
                        description: '(Always unencrypted)',
                        id: '49',
                        name: 'SenderCompID',
                        presence: 'required',
                    },
                    name: 'SenderCompID',
                    tag: 49,
                    value: null,
                    error: 'Missing field SenderCompID',
                },
            ]);
        });

        it('invalid - wrong Checksum', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.4|9=51|35=0|34=1|49=SENDER|56=TARGET|52=20090323-15:40:29|10=321|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        abbrName: 'CheckSum',
                        added: 'FIX.2.7',
                        description:
                            'Three byte, simple checksum (see Volume 2: "Checksum Calculation" for description). ALWAYS LAST FIELD IN MESSAGE; i.e. serves, with the trailing <SOH>, as the end-of-message delimiter. Always defined as three characters. (Always unencrypted)',
                        id: 10,
                        name: 'CheckSum',
                        type: 'String',
                    },
                    name: 'CheckSum',
                    tag: 10,
                    value: '321',
                    expectedValue: '148',
                    error: 'Incorrect value for CheckSum',
                },
            ]);
        });

        it('invalid - wrong DiscretionOffsetType', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.2|9=242|35=8|128=XYZ|34=4|49=CCG|56=ABC_DEFG01|52=20090323-15:40:35|55=CVS|37=NF 0542/03232009|11=NF 0542/03232009|17=0|20=0|39=0|150=0|54=1|38=100|40=1|59=0|31=0|32=0|14=0|842=WR|55=AAPL|6=0|151=100|60=20090323-15:40:30|58=New order|30=N|207=N|47=A|10=021|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    field: {
                        abbrName: 'OfstTyp',
                        type: 'DiscretionOffsetTypeCodeSet',
                        added: 'FIX.4.4',
                        name: 'DiscretionOffsetType',
                        id: 842,
                        description: 'Type of Discretion Offset value',
                    },
                    name: 'DiscretionOffsetType',
                    tag: 842,
                    value: 'WR',
                    error: 'Incorrect data format for value',
                },
            ]);
        });

        it('mixed (two messages, first valid, second invalid)', () => {
            const messages: Message[] = fixParser.parse(
                '8=FIX.4.2|9=83|35=A|34=702|49=ABC|52=20100130-10:52:40.663|1410=4|56=XYZ|95=4|96=1234|98=0|108=60|10=188|8=FIX.4.2|9=1111111|35=0|34=703|49=ABC|52=20100130-10:53:40.830|1410=4|56=XYZ|10=980|',
            );

            expect(messages[0].validate()).toEqual([]);
            expect(messages[1].validate()).toEqual([
                {
                    field: {
                        abbrName: 'BodyLength',
                        added: 'FIX.2.7',
                        description:
                            'Message length, in bytes, forward to the CheckSum field. ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted)',
                        id: 9,
                        name: 'BodyLength',
                        type: 'Length',
                    },
                    name: 'BodyLength',
                    tag: 9,
                    value: 1111111,
                    expectedValue: 58,
                    error: 'Incorrect value for BodyLength',
                },
                {
                    field: {
                        abbrName: 'CheckSum',
                        added: 'FIX.2.7',
                        description:
                            'Three byte, simple checksum (see Volume 2: "Checksum Calculation" for description). ALWAYS LAST FIELD IN MESSAGE; i.e. serves, with the trailing <SOH>, as the end-of-message delimiter. Always defined as three characters. (Always unencrypted)',
                        id: 10,
                        name: 'CheckSum',
                        type: 'String',
                    },
                    name: 'CheckSum',
                    tag: 10,
                    value: '980',
                    expectedValue: '034',
                    error: 'Incorrect value for CheckSum',
                },
            ]);
        });

        it('valid - checks for fields in component blocks', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.2|9=146|35=D|34=4|49=ABC_DEFG01|52=20090323-15:40:29|56=CCG|115=XYZ|11=NF 0542/03232009|54=1|38=100|55=CVS|40=1|59=0|47=A|60=20090323-15:40:29|21=1|207=N|10=195|',
            )[0];

            expect(message.validate()).toEqual([]);
        });

        it('invalid - missing field from component block', () => {
            const message: Message = fixParser.parse(
                '8=FIX.4.2|9=139|35=D|34=4|49=ABC_DEFG01|52=20090323-15:40:29|56=CCG|115=XYZ|11=NF 0542/03232009|54=1|55=CVS|40=1|59=0|47=A|60=20090323-15:40:29|21=1|207=N|10=139|',
            )[0];

            expect(message.validate()).toEqual([
                {
                    error: 'Missing block OrderQtyData',
                    field: {
                        abbrName: 'OrdQty',
                        added: 'FIX.4.3',
                        category: 'Common',
                        description: `The OrderQtyData component block contains the fields commonly used for indicating the amount or quantity of an order. Note that when this component block is marked as \"required\" in a message either one of these three fields must be used to identify the amount: OrderQty, CashOrderQty or OrderPercent (in the case of CIV).

`,
                        id: '1011',
                        name: 'OrderQtyData',
                        type: 'component',
                    },
                    name: 'OrderQtyData',
                    tag: 1011,
                    value: null,
                },
            ]);
        });
    });
});
