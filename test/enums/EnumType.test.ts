import type { ISpecEnums } from '../../spec/SpecEnums';
import { EnumType } from '../../src/enums/EnumType';

describe('EnumType', () => {
    const input: ISpecEnums = {
        id: '0000000',
        name: 'symbolic name',
        type: 'component',
        tag: 123,
        value: 'value',
        codeSet: 'TestCodeSet',
        group: 'group',
        sort: 5,
        description: 'description',
        added: 'added in version',
        addedEP: 'added in extension pack',
        updated: 'updated',
        updatedEP: 'updated in extension pack',
        deprecated: 'deprecated',
        deprecatedEP: 'deprecated in extension pack',
    };

    it('should set values', () => {
        const instance = new EnumType();
        instance.setEnumeration(input);
        expect(instance.id).toEqual(input.id);
        expect(instance.name).toEqual(input.name);
        expect(instance.type).toEqual(input.type);
        expect(instance.tag).toEqual(input.tag);
        expect(instance.value).toEqual(input.value);
        expect(instance.codeSet).toEqual(input.codeSet);
        expect(instance.group).toEqual(input.group);
        expect(instance.sort).toEqual(input.sort);
        expect(instance.description).toEqual(input.description);
        expect(instance.added).toEqual(input.added);
        expect(instance.addedEP).toEqual(input.addedEP);
        expect(instance.updated).toEqual(input.updated);
        expect(instance.updatedEP).toEqual(input.updatedEP);
        expect(instance.deprecated).toEqual(input.deprecated);
        expect(instance.deprecatedEP).toEqual(input.deprecatedEP);
    });
});
