import type { Field } from '../fields/Field';
import type { Message } from '../message/Message';
import prebuiltMap from '../spec/MessageType.json';
import type { ISpecDatatypes } from '../spec/SpecDatatypes';

export type RefType = {
  id: string;
  name: string;
  presence?: string;
  added?: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  annotation?: {
    documentation: string;
  };
};

export type CodeSet = {
  name: string;
  id: string;
  value: string;
  sort: string;
  added?: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  description: string;
};

export type DataStructure = {
  id: string;
  added?: string;
  category: string;
  abbrName: string;
  name: string;
  type: string;
  numInGroup?: {
    id: string;
    added: string;
    description: string;
  };
  fieldRef: RefType[];
  groupRef: RefType[];
  componentRef: RefType[];
  datatype: ISpecDatatypes;
  codeSet: {
    name: string;
    id: string;
    type: string;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    description: string;
    code: CodeSet[];
  };
  description: string;
};

export type Structure = {
  id: string;
  added: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  deprecated?: string;
  presence?: string;
  description?: string;
  type: 'componentRef' | 'fieldRef' | 'groupRef';
  data: DataStructure;
};

export type MessageTypeStructure = {
  id: string;
  msgType: string;
  abbrName: string;
  name: string;
  description?: string;
  added?: string;
  addedEP?: string;
  updated?: string;
  updatedEP?: string;
  category: {
    section: string;
    added?: string;
    addedEP?: string;
    FIXMLFileName: string;
    componentType: string;
    name: string;
    description?: string;
  };
  section: any;
  structure: Structure[];
};

export class MessageType {
  public cacheMap: Map<string, MessageTypeStructure>;

  constructor() {
    const map = Object.entries(prebuiltMap);
    this.cacheMap = new Map<string, MessageTypeStructure>(
      map as unknown as Map<string, MessageTypeStructure>
    );
  }

  public setMessageType(message: Message, field: Field): void {
    const messageType: MessageTypeStructure | undefined = this.cacheMap.get(
      field.value as string
    );
    if (messageType) {
      if (messageType.msgType) {
        message.setMessageType(messageType.msgType);
      }
      if (messageType.name) {
        message.setDescription(messageType.name);
      }
      if (messageType.description) {
        message.setMessageTypeDescription(messageType.description);
      }
      message.setStructure(messageType.structure);
    }
  }

  public setMessageSequence(message: Message, messageSequence: number): void {
    message.setMessageSequence(messageSequence);
  }
}
