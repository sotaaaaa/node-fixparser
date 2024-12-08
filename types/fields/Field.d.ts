import type { EnumType } from '../enums/EnumType';
import type { ISpecDatatypes } from '../spec/SpecDatatypes';
import type { CategoryType } from './categories/CategoryType';
import type { SectionType } from './sections/SectionType';
export declare class Field {
    tag: number;
    value: number | string | boolean | null;
    name: string | null;
    description: string | null;
    type: ISpecDatatypes | null;
    category: CategoryType | null;
    section: SectionType | null;
    enumeration: EnumType | null;
    constructor(tag: number, value: number | string | boolean | null);
    setTag(tag: number): void;
    setValue(value: number | string | boolean | null): void;
    setName(name: string): void;
    setDescription(description: string): void;
    setType(type: ISpecDatatypes | null): void;
    setCategory(category: CategoryType): void;
    setSection(section: SectionType): void;
    setEnumeration(enumeration: EnumType): void;
    toString(): string;
}
