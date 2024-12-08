import type { Message } from '../message/Message';
import { MessageType } from '../messagetype/MessageType';
import { type ISpecFields } from '../spec/SpecFields';
import type { Field } from './Field';
import { Categories } from './categories/Categories';
import { DataTypes } from './datatypes/Datatypes';
import { Sections } from './sections/Sections';
export declare class Fields {
    fields: ISpecFields[];
    cacheMap: Map<number, ISpecFields>;
    messageType: MessageType;
    categories: Categories;
    sections: Sections;
    dataTypes: DataTypes;
    constructor();
    processField(message: Message, field: Field): void;
}
