import type { ISpecSections } from '../../spec/SpecSections';
export declare class SectionType {
    sectionID: string | null;
    name: string | null;
    displayOrder: number | null;
    volume: string | null;
    notReqXML: boolean | null;
    fixmlFileName: string | null;
    description: string | null;
    setSection(section: ISpecSections): void;
    reset(): void;
}
