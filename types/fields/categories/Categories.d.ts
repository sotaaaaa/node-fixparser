import { type ISpecCategories } from '../../spec/SpecCategories';
import type { Field } from '../Field';
import { CategoryType } from './CategoryType';
export declare class Categories {
    categories: ISpecCategories[];
    cacheMap: Map<string, ISpecCategories>;
    categoryType: CategoryType;
    constructor();
    processCategory(field: Field, baseCategory: string): void;
}
