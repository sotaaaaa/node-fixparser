export interface ISpecEnums {
    name: string;
    id: string;
    tag: number;
    type: string;
    codeSet: string;
    value: string;
    sort?: number;
    group?: string;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    description?: string;
}
export declare const ENUMS: ISpecEnums[];
