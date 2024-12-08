import type { ISpecCategories } from '../../spec/SpecCategories';
export declare class CategoryType {
    categoryID: string | null;
    fixmlFileName: string | null;
    componentType: string | null;
    sectionID: string | null;
    includeFile: string | null;
    setCategory(category: ISpecCategories): void;
    reset(): void;
}
