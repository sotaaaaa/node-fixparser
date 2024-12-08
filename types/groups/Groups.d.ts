import { type ISpecGroups } from '../spec/SpecGroups';
export declare class Groups {
    groups: ISpecGroups[];
    cacheMap: Map<number, ISpecGroups>;
    cacheMapByName: Map<string, ISpecGroups>;
    constructor();
    find(componentId: number): ISpecGroups | undefined;
    findByName(name: string): ISpecGroups | undefined;
}
