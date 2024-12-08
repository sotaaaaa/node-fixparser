import type { ProxyAgent } from 'proxy-agent';

import { Enums as EnumsCache } from './enums/Enums';
import { Field } from './fields/Field';
import { Fields as FieldsCache } from './fields/Fields';
import { Field as FieldType } from './fieldtypes/Field';
import { Message } from './message/Message';
import type { LogOptions } from './util/Logger';
import { DEFAULT_FIX_VERSION, RE_ESCAPE, RE_FIND, SOH, STRING_EQUALS } from './util/util';

export type Protocol = 'tcp' | 'ssl-tcp' | 'tls-tcp' | 'websocket';
export type ConnectionType = 'acceptor' | 'initiator';

export type Options = {
  /* Target hostname or IP address */
  host?: string;
  /* Target port */
  port?: number;
  /* Type of protocol */
  protocol?: Protocol;
  /* Assigned value used to identify firm sending message, SenderCompID tag 49 */
  sender?: string;
  /* Assigned value used to identify receiving firm, TargetCompID tag 56 */
  target?: string;
  /* Heartbeat interval in seconds */
  heartbeatIntervalSeconds?: number;
  /* Protocol version, defaults to "FIXT.1.1" used by BeginString tag 8 */
  fixVersion?: string;
  /* Private keys in PEM format */
  tlsKey?: unknown | null;
  /* Cert chains in PEM format */
  tlsCert?: unknown | null;
  /* Use Server Name Indication extension of TLS (requires FQDN hostname) */
  tlsUseSNI?: boolean;
  /* Skip Standard Input pipe of TLS socket */
  tlsSkipStdInPipe?: boolean | null;
  /* Disable logs */
  logging?: boolean;
  /* Log options */
  logOptions?: LogOptions;
  /* Use a proxy connection */
  proxy?: ProxyAgent | null;
  /* Called when the FIX connection is opened and ready */
  onReady?: () => void;
  /* Called when a message has been received */
  onMessage?: (message: Message) => void;
  /* Called when the FIX connection has been initiated */
  onOpen?: () => void;
  /* Called when the FIX connection has been closed */
  onClose?: () => void;
  /* Called if the FIX connection has failed */
  onError?: (error?: Error) => void;
};

/**
 * FIXParser base class.
 */
export class FIXParserBase {
  /* Protocol version, defaults to "FIXT.1.1" used by BeginString tag 8 */
  public fixVersion: string = DEFAULT_FIX_VERSION;
  /* Current Message instance being processed */
  public message: Message | null = null;
  /* Current FIX message tag=value pair */
  public messageTags: string[] = [];
  /* Current FIX message in string format */
  public messageString = '';
  /* Collection of field values from the FIX specification */
  public fields: FieldsCache = new FieldsCache();
  /* Collection of enum values from the FIX specification */
  public enums: EnumsCache = new EnumsCache();

  /**
   * Processes a message by splitting up the string into tags.
   */
  public processMessage(): void {
    const matches: RegExpExecArray | null = RE_FIND.exec(this.messageString);
    if (matches && matches.length === 2) {
      const stringData: string = this.messageString.replace(
        new RegExp(matches[1].replace(RE_ESCAPE, '\\$&'), 'g'),
        SOH
      );
      this.message?.setString(stringData);
      this.messageTags = stringData.split(SOH);
    } else {
      this.message = null;
      this.messageTags = [];
    }
  }

  /**
   * Processes fields of a message.
   */
  public processFields(): void {
    let tag: number;
    let value: string | number | null;
    let i = 0;
    let equalsOperator: number;
    let field: Field;

    for (i; i < this.messageTags.length - 1; i++) {
      equalsOperator = this.messageTags[i].indexOf(STRING_EQUALS);

      tag = Number(this.messageTags[i].substring(0, equalsOperator));
      value = this.messageTags[i].substring(equalsOperator + 1);

      field = new Field(tag, value);

      this.fields.processField(this.message!, field);
      this.enums.processEnum(field);

      if (field.tag === FieldType.BeginString) {
        this.message!.fixVersion = String(field.value);
      } else if (field.tag === FieldType.BodyLength) {
        this.message?.validateBodyLength(value);
      } else if (field.tag === FieldType.CheckSum) {
        this.message?.validateChecksum(value);
      }

      this.message?.addField(field);
    }
  }

  /**
   * Parses FIX message(s) string into Message class instances.
   */
  public parse(data: string): Message[] {
    let i = 0;

    const messageStrings: string[] = data ? data.split(/(?<!\d)8=FIX/) : [];
    const messages: Message[] = [];

    for (i; i < messageStrings.length; i++) {
      this.message = new Message(this.fixVersion);
      this.messageString = `8=FIX${messageStrings[i]}`;
      if (this.messageString.indexOf(SOH) > -1) {
        this.message.setString(this.messageString);
        this.messageTags = this.messageString.split(SOH);
      } else {
        this.processMessage();
      }

      if (this.message) {
        this.processFields();
        messages.push(this.message);
      }
    }

    return messages;
  }
}
