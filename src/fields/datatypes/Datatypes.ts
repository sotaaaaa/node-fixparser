import { DATATYPES, type ISpecDatatypes } from '../../spec/SpecDatatypes';
import type { Field } from '../Field';

export class DataTypes {
  public dataTypes: ISpecDatatypes[] = DATATYPES;
  public cacheMap: Map<string, ISpecDatatypes> = new Map<string, ISpecDatatypes>();
  public cacheTypeMap: Map<
    string,
    { formatter: typeof parseInt | typeof parseFloat | StringConstructor; validator: any }
  > = new Map();

  constructor() {
    this.dataTypes.forEach((item: ISpecDatatypes) => {
      this.cacheMap.set(item.name, item);
    });

    this.cacheTypeMap.set('int', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });
    this.cacheTypeMap.set('Length', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });
    this.cacheTypeMap.set('TagNum', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });
    this.cacheTypeMap.set('SeqNum', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });
    this.cacheTypeMap.set('NumInGroup', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });
    this.cacheTypeMap.set('DayOfMonth', {
      formatter: Number.parseInt,
      validator: Number.isInteger,
    });

    this.cacheTypeMap.set('float', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });
    this.cacheTypeMap.set('Qty', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });
    this.cacheTypeMap.set('Price', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });
    this.cacheTypeMap.set('PriceOffset', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });
    this.cacheTypeMap.set('Amt', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });
    this.cacheTypeMap.set('Percentage', {
      formatter: Number.parseFloat,
      validator: Number.isFinite,
    });

    this.cacheTypeMap.set('char', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Boolean', { formatter: String, validator: 'string' });

    this.cacheTypeMap.set('String', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('MultipleCharValue', {
      formatter: String,
      validator: 'string',
    });
    this.cacheTypeMap.set('MultipleStringValue', {
      formatter: String,
      validator: 'string',
    });
    this.cacheTypeMap.set('Country', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Currency', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Exchange', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('MonthYear', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('UTCTimestamp', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('UTCTimeOnly', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('UTCDateOnly', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('LocalMktDate', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('LocalMktTime', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('TZTimeOnly', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('TZTimestamp', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('data', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('XMLData', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('XID', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('XIDREF', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Language', { formatter: String, validator: 'string' });

    this.cacheTypeMap.set('Pattern', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Tenor', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Reserved100Plus', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Reserved1000Plus', { formatter: String, validator: 'string' });
    this.cacheTypeMap.set('Reserved4000Plus', { formatter: String, validator: 'string' });
  }

  public validateDatatype(
    value: number | string | boolean | null,
    type: string | undefined
  ): boolean {
    if (!type) {
      return true;
    }

    const typeMap = this.cacheTypeMap.get(type);
    if (typeMap) {
      if (typeMap.validator === 'string') {
        return typeof value === 'string';
      }
      return typeMap.validator(value);
    }
    return false;
  }

  public processDatatype(field: Field, type: string): void {
    const dataType: ISpecDatatypes | undefined = this.cacheMap.get(type);
    if (dataType) {
      field.setType(dataType);
      if (
        type === 'int' ||
        type === 'Length' ||
        type === 'TagNum' ||
        type === 'SeqNum' ||
        type === 'NumInGroup' ||
        type === 'DayOfMonth'
      ) {
        field.setValue(Number(field.value!));
      } else if (
        type === 'float' ||
        type === 'Qty' ||
        type === 'Price' ||
        type === 'PriceOffset' ||
        type === 'Amt' ||
        type === 'Percentage'
      ) {
        field.setValue(Number.parseFloat(field.value as string));
      }
    }
  }
}
