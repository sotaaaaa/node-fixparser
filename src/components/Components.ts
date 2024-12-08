import { COMPONENTS, type ISpecComponents } from '../spec/SpecComponents';

export class Components {
  public components: ISpecComponents[] = COMPONENTS;
  public cacheMap = new Map<number, ISpecComponents>();
  public cacheMapByName = new Map<string, ISpecComponents>();

  constructor() {
    this.components.forEach(component => {
      this.cacheMap.set(component.id, component);
    });
    this.components.forEach(component => {
      this.cacheMapByName.set(component.name, component);
    });
  }

  public find(componentId: number): ISpecComponents | undefined {
    return this.cacheMap.get(componentId);
  }

  public findByName(name: string): ISpecComponents | undefined {
    return this.cacheMapByName.get(name);
  }
}
