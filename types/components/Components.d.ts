import { type ISpecComponents } from '../spec/SpecComponents';
export declare class Components {
    components: ISpecComponents[];
    cacheMap: Map<number, ISpecComponents>;
    cacheMapByName: Map<string, ISpecComponents>;
    constructor();
    find(componentId: number): ISpecComponents | undefined;
    findByName(name: string): ISpecComponents | undefined;
}
