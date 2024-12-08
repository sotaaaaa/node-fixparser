import { Field as FieldType } from '../fieldtypes/Field';
import type { Message } from '../message/Message';
import { MessageType } from '../messagetype/MessageType';
import { FIELDS, type ISpecFields } from '../spec/SpecFields';
import type { Field } from './Field';
import { Categories } from './categories/Categories';
import { DataTypes } from './datatypes/Datatypes';
import { Sections } from './sections/Sections';

export class Fields {
  public fields: ISpecFields[] = FIELDS;
  public cacheMap: Map<number, ISpecFields> = new Map<number, ISpecFields>();
  public messageType: MessageType = new MessageType();
  public categories: Categories = new Categories();
  public sections: Sections = new Sections();
  public dataTypes: DataTypes = new DataTypes();

  constructor() {
    this.fields.forEach((item: ISpecFields) => {
      this.cacheMap.set(Number(item.id) >> 0, item);
    });
  }

  public processField(message: Message, field: Field): void {
    const data: ISpecFields | undefined = this.cacheMap.get(field.tag);
    if (data) {
      if (field.tag === FieldType.MsgType) {
        this.messageType.setMessageType(message, field);
      }
      if (field.tag === FieldType.MsgSeqNum) {
        this.messageType.setMessageSequence(message, Number(field.value));
      }

      field.setName(data.name);
      field.setDescription(data.description || '');

      if (data.baseCategory) {
        this.categories.processCategory(field, data.baseCategory);

        if (field.category?.sectionID) {
          this.sections.processSection(field, field.category?.sectionID || '');
        }
      }

      this.dataTypes.processDatatype(field, data.type);
    } else {
      field.setType(null);
      field.setValue(field.value);
    }
  }
}
