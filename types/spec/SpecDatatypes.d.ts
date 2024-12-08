export interface ISpecDatatypes {
    name: string;
    added: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    baseType?: string;
    mappedDatatype?: {
        builtin: string;
        base: string;
        standard: string;
        minInclusive?: string;
        pattern?: string;
        description?: string;
    };
    description?: string;
}
export declare const DATATYPES: ISpecDatatypes[];
