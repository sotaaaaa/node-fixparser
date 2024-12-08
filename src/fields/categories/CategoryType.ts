import type { ISpecCategories } from '../../spec/SpecCategories';

export class CategoryType {
  public categoryID: string | null = null;
  public fixmlFileName: string | null = null;
  public componentType: string | null = null;
  public sectionID: string | null = null;
  public includeFile: string | null = null;

  public setCategory(category: ISpecCategories): void {
    this.categoryID = category.name;
    this.fixmlFileName = category.FIXMLFileName;
    this.componentType = category.componentType;
    this.sectionID = category.section!;
    this.includeFile = category.includeFile!;
  }

  public reset(): void {
    this.categoryID = null;
    this.fixmlFileName = null;
    this.componentType = null;
    this.sectionID = null;
    this.includeFile = null;
  }
}
