import { type ISpecDatatypes } from '../../spec/SpecDatatypes';
import type { Field } from '../Field';
export declare class DataTypes {
    dataTypes: ISpecDatatypes[];
    cacheMap: Map<string, ISpecDatatypes>;
    cacheTypeMap: Map<string, {
        formatter: typeof parseInt | typeof parseFloat | StringConstructor;
        validator: any;
    }>;
    constructor();
    validateDatatype(value: number | string | boolean | null, type: string | undefined): boolean;
    processDatatype(field: Field, type: string): void;
}
