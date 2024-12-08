export interface ISpecFields {
    id: number;
    type: string;
    name: string;
    description?: string;
    abbrName?: string;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    baseCategory?: string;
    baseCategoryAbbrName?: string;
    unionDataType?: string;
    lengthId?: string;
    discriminatorId?: string;
}
export declare const FIELDS: ISpecFields[];
