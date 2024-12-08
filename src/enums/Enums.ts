import type { Field } from '../fields/Field';
import { ENUMS, type ISpecEnums } from '../spec/SpecEnums';
import { EnumType } from './EnumType';

export class Enums {
  public enums: ISpecEnums[] = ENUMS;
  public cacheMap: Map<string, ISpecEnums> = new Map<string, ISpecEnums>();
  public cacheMapTag: Map<string, ISpecEnums> = new Map<string, ISpecEnums>();

  constructor() {
    this.enums.forEach((enumType: ISpecEnums) => {
      this.cacheMap.set(`${enumType.tag}|${enumType.value}`, enumType);
      this.cacheMapTag.set(`${enumType.tag}`, enumType);
    });
  }

  public getEnum(
    tag: string,
    value: number | string | boolean | null
  ): ISpecEnums | undefined {
    return this.cacheMap.get(`${tag}|${value}`);
  }

  public getEnumByTag(tag: string): ISpecEnums | undefined {
    return this.cacheMapTag.get(tag);
  }

  public processEnum(field: Field): void {
    const enumTypes: EnumType = new EnumType();
    const foundEnum: ISpecEnums | undefined = this.cacheMap.get(
      `${field.tag}|${field.value}`
    );
    if (foundEnum) {
      enumTypes.setEnumeration(foundEnum);
      field.setEnumeration(enumTypes);
    }
  }
}
