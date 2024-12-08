import { Components } from '../components/Components';
import { Enums } from '../enums/Enums';
import { Field } from '../fields/Field';
import { Fields } from '../fields/Fields';
import { DataTypes } from '../fields/datatypes/Datatypes';
import { Field as FieldType } from '../fieldtypes/Field';
import type { Structure } from '../messagetype/MessageType';
import type { RefType } from '../messagetype/MessageType';
import type { ISpecEnums } from '../spec/SpecEnums';
import type { ISpecFields } from '../spec/SpecFields';
import { DEFAULT_FIX_VERSION, SOH, includesAny, pad } from '../util/util';

const TAG_CHECKSUM: string = '10=';
const TAG_MSGTYPE: string = '35=';
const MARKER_BODYLENGTH: string = '\x02';
const MARKER_CHECKSUM: string = '\x03';

type FieldValues = {
  [tag: string]: any;
};

export type MessageError = {
  field: RefType | ISpecFields | undefined;
  name: string | null;
  tag: number;
  value: number | string | boolean | null;
  expectedValue?: number | string | boolean | null;
  error: string;
};

const explain = (field: Field) => field.enumeration?.name || field.value;
const setFieldValue = (field: Field, values: FieldValues, useName = false): void => {
  if (values[field.name!]) {
    if (Array.isArray(values[field.name!])) {
      values[field.name!] = [
        ...values[field.name!],
        useName ? explain(field) : field.value,
      ];
    } else {
      values[field.name!] = [values[field.name!], useName ? explain(field) : field.value];
    }
  } else {
    values[field.name!] = useName ? explain(field) : field.value;
  }
};

export class Message {
  public fixVersion: string = DEFAULT_FIX_VERSION;
  public data: Field[] = [];
  public messageString = '';
  public description = '';
  public messageType = '';
  public messageTypeDescription = '';
  public messageSequence = -1;
  public structure: Structure[] | null = null;
  public bodyLengthValid = false;
  public checksumValid = false;
  public checksumValue: string | null = null;
  public checksumExpected: string | null = null;
  public bodyLengthValue: number | null = null;
  public bodyLengthExpected: number | null = null;

  constructor(fixVersion: string = DEFAULT_FIX_VERSION, ...fields: Field[]) {
    this.fixVersion = fixVersion;
    this.reset();

    // Add other tags
    fields.forEach((field: Field) => {
      if (field.tag === FieldType.BeginString) {
        this.fixVersion = String(field.value);
      }
      if (field.tag === FieldType.MsgSeqNum) {
        this.setMessageSequence(Number(field.value));
      }

      if (field.tag === FieldType.MsgType) {
        this.data.splice(0, 0, field);
      } else {
        this.data.push(field);
      }
    });
  }

  #calculateBodyLength = (value: string): number => {
    const startLength: number =
      value.indexOf(TAG_MSGTYPE) === -1 ? 0 : value.indexOf(TAG_MSGTYPE) + 1;
    const endLength: number =
      value.lastIndexOf(TAG_CHECKSUM) === -1
        ? value.length
        : value.lastIndexOf(TAG_CHECKSUM) + 1;

    return endLength - startLength;
  };

  #calculateChecksum = (value: string): string => {
    let integerValues = 0;

    let i = 0;
    for (i; i < value.length; i++) {
      integerValues += value.charCodeAt(i);
    }

    return pad(integerValues & 255, 3);
  };

  // #calculatePosition = (spec: any, tag: number): number => {
  //     if (spec.tagText === 'StandardHeader' && tag === FieldType.BeginString) {
  //         return 0;
  //     }
  //     if (spec.tagText === 'StandardHeader' && tag === FieldType.BodyLength) {
  //         return 1;
  //     }
  //     if (spec.tagText === 'StandardHeader' && tag === FieldType.MsgType) {
  //         return 2;
  //     }
  //     if (spec.tagText === 'StandardTrailer') {
  //         return 999999999;
  //     }
  //     return Number(spec.position);
  // };

  #nonEmpty = (parts: TemplateStringsArray, ...args: string[]): string => {
    let res: string = parts[0];
    let i = 1;
    for (i; i < parts.length; i++) {
      if (args[i - 1] || args[i - 1] === '0') {
        res += args[i - 1];
      }
      res += parts[i];
    }
    return res;
  };

  #validateRef = (
    structureItem: Structure,
    refType: 'fieldRef' | 'componentRef' | 'groupRef',
    tagSet: Set<number>
  ): MessageError | undefined => {
    if (structureItem?.data[refType]) {
      const list = structureItem?.data[refType];
      for (const ref of list) {
        if (tagSet.has(Number(ref.id))) {
          continue;
        }

        return {
          field: {
            ...ref,
          },
          name: ref.name,
          tag: Number(ref.id),
          value: null,
          error: `Missing field ${ref.name}`,
        };
      }
    }
    return undefined;
  };

  #validateMessage = (message: Message, requiredFieldsOnly: boolean): MessageError[] => {
    const result: MessageError[] = [];
    const fields: Field[] = structuredClone(message.data);
    const tagSet: Set<number> = new Set();

    // TODO cache initialization...
    const _specEnums = new Enums();
    const _specFields = new Fields();
    const _specDatatypes = new DataTypes();
    const _specComponents = new Components();

    fields.forEach((field: Field, index: number) => {
      tagSet.add(field.tag);
      const fieldSpec = _specFields?.cacheMap.get(field.tag);
      const hasEnum = _specEnums?.getEnumByTag(String(field.tag));
      const enumValue = _specEnums?.getEnum(String(field.tag), field.value);

      if (
        (hasEnum && !enumValue) ||
        !_specDatatypes.validateDatatype(field.value, field.type?.name)
      ) {
        result.push({
          field: fieldSpec,
          name: field.name,
          tag: field.tag,
          value: field.value,
          error: 'Incorrect data format for value',
        });
      }

      if (field.tag === FieldType.BodyLength) {
        const isValidBodyLength = this.validateBodyLength(String(this.bodyLengthValue));
        if (!isValidBodyLength) {
          result.push({
            field: fieldSpec,
            name: field.name,
            tag: field.tag,
            value: field.value,
            expectedValue: this.bodyLengthExpected,
            error: 'Incorrect value for BodyLength',
          });
        }
      } else if (field.tag === FieldType.CheckSum) {
        const isValidCheckSum = this.validateChecksum(String(this.checksumValue));
        if (!isValidCheckSum) {
          result.push({
            field: fieldSpec,
            name: field.name,
            tag: field.tag,
            value: field.value,
            expectedValue: this.checksumExpected,
            error: 'Incorrect value for CheckSum',
          });
        }
      }
    });

    if (this.structure) {
      for (const item of this.structure) {
        // Single field type
        if (
          !tagSet.has(Number(item.data.id)) &&
          !item?.data.fieldRef &&
          !item?.data.groupRef &&
          !item?.data.componentRef &&
          item?.data.id !== '1003'
        ) {
          /*
                        Application Version Precedence
                        Lowest: DefaultApplVerID(1137)
                        Supersedes: RefMsgType(372), RefApplVerID(1130), DefaultVerIndicator(1410),
                        Highest, explicit: ApplVerID(1128)
                     */
          if ([1137, 372, 1130, 1410, 1128].includes(Number(item.data.id))) {
            if (
              tagSet.has(1137) ||
              tagSet.has(372) ||
              tagSet.has(1130) ||
              tagSet.has(1410) ||
              tagSet.has(1128)
            ) {
              continue;
            }
          }

          if (item.data.type === 'component') {
            const messageFields: number[] = fields.map(field => field.tag);
            let componentFields: number[] = [];
            const componentSpec = _specComponents?.cacheMap.get(Number(item.data.id));
            if (componentSpec) {
              if (componentSpec.fieldRef) {
                componentFields = componentFields.concat(
                  componentSpec.fieldRef.map(field => field.id)
                );
              }
              if (componentSpec.componentRef) {
                componentFields = componentFields.concat(
                  componentSpec.componentRef.map(field => field.id)
                );
              }
              if (componentSpec.groupRef) {
                componentFields = componentFields.concat(
                  componentSpec.groupRef.map(field => field.id)
                );
              }
            }
            if (!includesAny(componentFields, messageFields)) {
              result.push({
                field: {
                  ...item.data,
                },
                tag: Number(item.data.id),
                name: item.data.name,
                value: null,
                error: `Missing block ${item.data.name}`,
              });
            }
          } else {
            result.push({
              field: {
                ...item.data,
              },
              tag: Number(item.data.id),
              name: item.data.name,
              value: null,
              error: `Missing field ${item.data.name}`,
            });
          }
        }

        const fieldRef = this.#validateRef(item, 'fieldRef', tagSet);
        const componentRef = this.#validateRef(item, 'componentRef', tagSet);
        const groupRef = this.#validateRef(item, 'groupRef', tagSet);

        if (fieldRef) {
          result.push(fieldRef);
        }

        if (componentRef) {
          result.push(componentRef);
        }

        if (groupRef) {
          result.push(groupRef);
        }
      }
    }

    return result;
  };

  public addField(field: Field): void {
    this.data.push(field);
  }

  public addFields(...fields: Field[]): void {
    fields.forEach((field: Field) => {
      if (field.tag === FieldType.MsgType) {
        this.data.splice(0, 0, field);
      } else {
        this.data.push(field);
      }
    });
  }

  public removeFieldByTag(tag: number): void {
    const index: number = this.data.findIndex((field: Field) => field.tag === tag);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  public getField(tag: number): Field | undefined {
    return this.data.find((field: Field) => field.tag === tag);
  }

  public getFields(tag: number): Field[] | undefined {
    return this.data.filter((field: Field) => field.tag === tag);
  }

  public getFieldValues(): FieldValues {
    const values: FieldValues = {};
    this.data.forEach((field: Field) => {
      if (values[field.tag]) {
        if (Array.isArray(values[field.tag])) {
          values[field.tag] = [...values[field.tag], field.value];
        } else {
          values[field.tag] = [values[field.tag], field.value];
        }
      } else {
        values[field.tag] = field.value;
      }
    });
    return values;
  }

  public getFieldNameValues(): FieldValues {
    const values: FieldValues = {};
    this.data.forEach((field: Field) => {
      setFieldValue(field, values, false);
    });
    return values;
  }

  public getFieldExplains(): FieldValues {
    const values: FieldValues = {};
    this.data.forEach((field: Field) => {
      setFieldValue(field, values, true);
    });
    return values;
  }

  public setField(field: Field): void {
    const index: number = this.data.findIndex((item: Field) => item.tag === field.tag);
    if (index > -1) {
      this.data[index] = field;
    }
  }

  public setString(fixString: string): void {
    this.messageString = fixString;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

  public setMessageType(messageType: string): void {
    this.messageType = messageType;
  }

  public setMessageTypeDescription(messageTypeDescription: string): void {
    this.messageTypeDescription = messageTypeDescription;
  }

  public setMessageSequence(messageSequence: number): void {
    this.messageSequence = messageSequence;
  }

  public setStructure(structure: Structure[]): void {
    this.structure = structure;
  }

  public getEnum(
    tag: number,
    value: number | string | boolean | null
  ): ISpecEnums | undefined {
    if (!this.getField(FieldType.MsgType) || !this.getField(FieldType.MsgType)?.tag) {
      return;
    }

    if (!this.getField(FieldType.MsgType) || !this.getField(FieldType.MsgType)?.value) {
      return;
    }

    const enums = new Enums();
    return enums.getEnum(tag.toString(), value);
  }

  public getBriefDescription(): string | null {
    let returnValue = '';
    const sideField: Field | undefined = this.getField(FieldType.Side);
    let side: string | null = '';
    if (sideField?.enumeration) {
      side = sideField.enumeration.name;
      side = side ? side.replace('Sell', 'SL').toUpperCase() : null;
    }

    if (this.getField(FieldType.LeavesQty) !== undefined) {
      let quantity = '';

      if (this.getField(FieldType.ContraTradeQty)) {
        quantity = String(this.getField(FieldType.ContraTradeQty)?.value);
      } else {
        quantity = this.getField(FieldType.OrderQty)
          ? String(this.getField(FieldType.OrderQty)?.value)
          : '';
      }
      const leavesQuantity: string = String(this.getField(FieldType.LeavesQty)?.value);
      const lastPrice: number = this.getField(FieldType.LastPx)
        ? Number(this.getField(FieldType.LastPx)?.value)
        : 0;
      returnValue = this.#nonEmpty`${quantity} @${
        lastPrice || lastPrice === 0 ? lastPrice.toFixed(2) : '0.00'
      } ${this.getField(FieldType.LeavesQty)!.name!.replace(
        'LeavesQty',
        'LvsQty'
      )} ${Number.parseInt(leavesQuantity, 10).toString()}`;
    } else if (this.getField(FieldType.OrderQty)) {
      const orderQuantity: string = String(this.getField(FieldType.OrderQty)?.value);
      const symbol: string = this.getField(FieldType.Symbol)
        ? String(this.getField(FieldType.Symbol)?.value)
        : '';
      const orderType: Field = this.getField(FieldType.OrdType)!;
      let name = '';
      if (orderType?.enumeration?.name) {
        name = orderType.enumeration.name;
      }
      const timeInForceField = this.getField(FieldType.TimeInForce)!;
      let timeInForce: string | null = null;
      if (timeInForceField?.enumeration) {
        timeInForce = timeInForceField.enumeration.name;
      }

      if (this.getField(FieldType.Price)) {
        let price: number | string = Number(this.getField(FieldType.Price)?.value);
        if (price >= 1) {
          price = price.toFixed(2);
        } else if (price < 1) {
          price = price.toString().replace('0.', '.');
        }
        returnValue = this.#nonEmpty`${side || ''} ${orderQuantity} ${
          symbol ? symbol.toUpperCase() : ''
        } ${
          name ? name.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : ''
        } @${price.toString()} ${timeInForce ? timeInForce.toUpperCase() : ''}`;
      } else {
        returnValue = this.#nonEmpty`${side || ''} ${orderQuantity} ${
          symbol ? symbol.toUpperCase() : ''
        } ${
          name ? name.replace('Market', 'MKT').replace('Limit', 'LMT').toUpperCase() : ''
        } ${timeInForce ? timeInForce.toUpperCase() : ''}`;
      }
    } else {
      const messageType = this.getField(FieldType.MsgType);
      if (messageType?.tag && messageType.value) {
        const name = this.getEnum(messageType.tag, String(messageType.value))?.name;
        return name || '';
      }
      return null;
    }

    return returnValue.trim();
  }

  public validateBodyLength(value: string): boolean {
    const index: number = this.messageString.indexOf(TAG_MSGTYPE);
    const lastIndex: number = this.messageString.lastIndexOf(TAG_CHECKSUM);
    const startLength: number = index === -1 ? 0 : index;
    const endLength: number = lastIndex === -1 ? this.messageString.length : lastIndex;
    const bodyLength: number = endLength - startLength;

    this.bodyLengthValue = Number(value);
    this.bodyLengthExpected = bodyLength;
    this.bodyLengthValid = Number(value) === bodyLength;
    return this.bodyLengthValid;
  }

  public validateChecksum(value: string): boolean {
    const lastIndex: number = this.messageString.lastIndexOf(TAG_CHECKSUM);
    const length: number = lastIndex === -1 ? this.messageString.length : lastIndex;
    const data: string = this.messageString.substring(0, length);
    const calculatedChecksum: string = this.#calculateChecksum(data);

    this.checksumValue = value;
    this.checksumExpected = calculatedChecksum;
    this.checksumValid = value === calculatedChecksum;
    return this.checksumValid;
  }

  public validate(requiredFieldsOnly = true): MessageError[] {
    return this.#validateMessage(this, requiredFieldsOnly);
  }

  public encode(separator: string = SOH): string {
    const fields: Field[] = this.data.map(
      (field: Field) => new Field(field.tag, field.value)
    );
    const data: string[] = [];

    let beginString: string = new Field(
      FieldType.BeginString,
      this.fixVersion
    ).toString();
    let bodyLength: string = new Field(
      FieldType.BodyLength,
      MARKER_BODYLENGTH
    ).toString();
    let checksum: string = new Field(FieldType.CheckSum, MARKER_CHECKSUM).toString();
    let index: number = fields.findIndex(field => field.tag === FieldType.BeginString);

    // Check for header
    if (index > -1) {
      beginString = fields[index].toString();
      fields.splice(index, 1);
    }

    // Check for body length
    index = fields.findIndex(field => field.tag === FieldType.BodyLength);
    if (index > -1) {
      bodyLength = fields[index].toString();
      fields.splice(index, 1);
    }

    // Check for trailer
    index = fields.findIndex(field => field.tag === FieldType.CheckSum);
    if (index > -1) {
      checksum = fields[index].toString();
      fields.splice(index, 1);
    }

    data.push(beginString);
    data.push(bodyLength);

    // Add other fields
    fields.forEach(field => {
      data.push(field.toString());
    });

    data.push(checksum);

    let fixMessage = `${data.join(separator)}${separator}`;
    fixMessage = fixMessage.replace(
      MARKER_BODYLENGTH,
      this.#calculateBodyLength(fixMessage).toString()
    );

    const length: number =
      fixMessage.lastIndexOf(TAG_CHECKSUM) === -1
        ? fixMessage.length
        : fixMessage.lastIndexOf(TAG_CHECKSUM);
    const calculatedChecksum: string = this.#calculateChecksum(
      fixMessage.substring(0, length)
    );
    fixMessage = fixMessage.replace(MARKER_CHECKSUM, calculatedChecksum);

    return fixMessage;
  }

  public clone(): Message {
    const cloned: Message = new Message(this.fixVersion, ...this.data);
    cloned.messageSequence = this.messageSequence;
    cloned.messageType = this.messageType;
    return cloned;
  }

  private reset(): void {
    this.data = [];
    this.messageString = '';
    this.description = '';
    this.messageType = '';
    this.messageSequence = -1;
    this.structure = null;
    this.bodyLengthValid = false;
    this.checksumValid = false;
    this.checksumValue = null;
    this.checksumExpected = null;
    this.bodyLengthValue = null;
    this.bodyLengthExpected = null;
  }
}
