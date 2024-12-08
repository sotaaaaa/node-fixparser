import { EnumType } from '../../src/enums/EnumType';
import { Field } from '../../src/fields/Field';
import { CategoryType } from '../../src/fields/categories/CategoryType';
import { SectionType } from '../../src/fields/sections/SectionType';

describe('Field', () => {
    it('should return a new Field', () => {
        const field = new Field(8, 'FIX.4.4');
        expect(field.tag).toEqual(8);
        expect(field.value).toEqual('FIX.4.4');
    });
    it('should set tag', () => {
        const field = new Field(8, 'FIX.4.4');
        field.setTag(9);
        expect(field.tag).toEqual(9);
    });
    it('should set value', () => {
        const field = new Field(8, 'FIX.4.4');
        field.setValue('FIXT.1.1');
        expect(field.value).toEqual('FIXT.1.1');
    });
    it('should set name', () => {
        const field = new Field(8, 'FIX.4.4');
        field.setName('name123');
        expect(field.name).toEqual('name123');
    });
    it('should set description', () => {
        const field = new Field(8, 'FIX.4.4');
        field.setDescription('description123');
        expect(field.description).toEqual('description123');
    });
    it('should set type', () => {
        const field = new Field(8, 'FIX.4.4');
        const fieldType = {
            name: 'name',
            added: 'added',
            addedEP: 'addedEP',
            updated: 'updated',
        };
        field.setType(fieldType);
        expect(field.type).toEqual(fieldType);
    });
    it('should set category', () => {
        const field = new Field(8, 'FIX.4.4');
        const categoryType = new CategoryType();
        field.setCategory(categoryType);
        expect(field.category).toEqual(categoryType);
    });
    it('should set section', () => {
        const field = new Field(8, 'FIX.4.4');
        const sectionType = new SectionType();
        field.setSection(sectionType);
        expect(field.section).toEqual(sectionType);
    });
    it('should set enumeration', () => {
        const field = new Field(8, 'FIX.4.4');
        const enumerationType = new EnumType();
        field.setEnumeration(enumerationType);
        expect(field.enumeration).toEqual(enumerationType);
    });
    it('should get toString', () => {
        const field = new Field(8, 'FIXT.1.1');
        expect(field.toString()).toEqual('8=FIXT.1.1');
    });
});
