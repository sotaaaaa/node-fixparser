import type { ISpecEnums } from '../spec/SpecEnums';
export declare class EnumType {
    name: string | null;
    id: string | null;
    tag: number | null;
    type: string | null;
    codeSet: string | null;
    value: string | null;
    sort?: number | null;
    group?: string | null;
    added?: string | null;
    addedEP?: string | null;
    updated?: string | null;
    updatedEP?: string | null;
    deprecated?: string | null;
    deprecatedEP?: string | null;
    description?: string | null;
    setEnumeration(enumType: ISpecEnums): void;
}
