import { CATEGORIES, type ISpecCategories } from '../../spec/SpecCategories';
import type { Field } from '../Field';
import { CategoryType } from './CategoryType';

export class Categories {
  public categories: ISpecCategories[] = CATEGORIES;
  public cacheMap: Map<string, ISpecCategories> = new Map<string, ISpecCategories>();
  public categoryType: CategoryType = new CategoryType();

  constructor() {
    this.categories.forEach((category: ISpecCategories) => {
      this.cacheMap.set(category.name, category);
    });
  }

  public processCategory(field: Field, baseCategory: string): void {
    this.categoryType.reset();
    const categoryData: ISpecCategories | undefined = this.cacheMap.get(baseCategory);
    if (categoryData) {
      this.categoryType.setCategory(categoryData);
      field.setCategory(this.categoryType);
    }
  }
}
