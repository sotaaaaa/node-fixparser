import { type ISpecSections } from '../../spec/SpecSections';
import type { Field } from '../Field';
import { SectionType } from './SectionType';
export declare class Sections {
    sections: ISpecSections[];
    cacheMap: Map<string, ISpecSections>;
    sectionType: SectionType;
    constructor();
    processSection(item: Field, sectionId: string): void;
}
