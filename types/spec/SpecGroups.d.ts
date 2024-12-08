interface Ref {
    id: number;
    added: string;
    presence?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    description?: string;
}
export interface ISpecGroups {
    id: number;
    name: string;
    category: string;
    abbrName: string;
    description: string;
    added: string;
    fieldRef?: Ref[];
    groupRef?: Ref[];
    componentRef?: Ref[];
    numInGroup: {
        id: number;
        added?: string;
        addedEP?: string;
        updated?: string;
        updatedEP?: string;
        deprecated?: string;
        deprecatedEP?: string;
        description?: string;
    };
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
}
export declare const GROUPS: ISpecGroups[];
export {};
