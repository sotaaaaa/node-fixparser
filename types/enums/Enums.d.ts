import type { Field } from '../fields/Field';
import { type ISpecEnums } from '../spec/SpecEnums';
export declare class Enums {
    enums: ISpecEnums[];
    cacheMap: Map<string, ISpecEnums>;
    cacheMapTag: Map<string, ISpecEnums>;
    constructor();
    getEnum(tag: string, value: number | string | boolean | null): ISpecEnums | undefined;
    getEnumByTag(tag: string): ISpecEnums | undefined;
    processEnum(field: Field): void;
}
