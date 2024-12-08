import type { Field } from '../fields/Field';
import type { Message } from '../message/Message';
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
export declare class MessageType {
    cacheMap: Map<string, MessageTypeStructure>;
    constructor();
    setMessageType(message: Message, field: Field): void;
    setMessageSequence(message: Message, messageSequence: number): void;
}
