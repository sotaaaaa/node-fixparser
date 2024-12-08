import type { ISpecEnums } from '../spec/SpecEnums';

export class EnumType {
  public name: string | null = null;
  public id: string | null = null;
  public tag: number | null = null;
  public type: string | null = null;
  public codeSet: string | null = null;
  public value: string | null = null;
  public sort?: number | null = null;
  public group?: string | null = null;
  public added?: string | null = null;
  public addedEP?: string | null = null;
  public updated?: string | null = null;
  public updatedEP?: string | null = null;
  public deprecated?: string | null = null;
  public deprecatedEP?: string | null = null;
  public description?: string | null = null;

  public setEnumeration(enumType: ISpecEnums): void {
    this.name = enumType.name;
    this.id = enumType.id;
    this.tag = enumType.tag;
    this.type = enumType.type;
    this.codeSet = enumType.codeSet;
    this.value = enumType.value;
    this.sort = enumType.sort;
    this.group = enumType.group;
    this.added = enumType.added;
    this.addedEP = enumType.addedEP;
    this.updated = enumType.updated;
    this.updatedEP = enumType.updatedEP;
    this.deprecated = enumType.deprecated;
    this.deprecatedEP = enumType.deprecatedEP;
    this.description = enumType.description;
  }
}
