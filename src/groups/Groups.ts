import { GROUPS, type ISpecGroups } from '../spec/SpecGroups';

export class Groups {
  public groups: ISpecGroups[] = GROUPS;
  public cacheMap = new Map<number, ISpecGroups>();
  public cacheMapByName = new Map<string, ISpecGroups>();

  constructor() {
    this.groups.forEach(component => {
      this.cacheMap.set(component.id, component);
    });
    this.groups.forEach(component => {
      this.cacheMapByName.set(component.name, component);
    });
  }

  public find(componentId: number): ISpecGroups | undefined {
    return this.cacheMap.get(componentId);
  }

  public findByName(name: string): ISpecGroups | undefined {
    return this.cacheMapByName.get(name);
  }
}
