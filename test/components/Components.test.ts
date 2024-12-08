import { Components } from '../../src/components/Components';

describe('Components', () => {
    const expected = {
        id: 4408,
        addedEP: '208',
        added: 'FIX.5.0SP2',
        category: 'Common',
        abbrName: 'Frmla',
        name: 'UnderlyingPaymentStreamFormula',
        fieldRef: [
            {
                id: 42978,
                addedEP: '208',
                added: 'FIX.5.0SP2',
            },
            {
                id: 42979,
                addedEP: '208',
                added: 'FIX.5.0SP2',
            },
            {
                id: 42980,
                addedEP: '208',
                added: 'FIX.5.0SP2',
            },
        ],
        groupRef: [
            {
                id: 4409,
                addedEP: '208',
                added: 'FIX.5.0SP2',
            },
        ],
        componentRef: [
            {
                id: 4405,
                addedEP: '208',
                added: 'FIX.5.0SP2',
            },
        ],
        description:
            'UnderlyingPaymentStreamFormula is a subcomponent of the UnderlyingPaymentStreamFloatingRate component used to report the parameters for determining the floating rate of the stream e.g. for equity swaps.\n\n',
    };

    it('should return a new class containing cache maps', () => {
        const instance = new Components();
        expect(instance.cacheMap.size).toBeGreaterThan(1);
        expect(instance.cacheMapByName.size).toBeGreaterThan(1);
    });
    it('should find by id', () => {
        const instance = new Components();
        const component = instance.find(4408);
        expect(component).toEqual(expected);
    });
    it('should find by name', () => {
        const instance = new Components();
        const component = instance.findByName('UnderlyingPaymentStreamFormula');
        expect(component).toEqual(expected);
    });
    it('should return undefined if not found - find', () => {
        const instance = new Components();
        const component = instance.find(11223344);
        expect(component).toBeUndefined();
    });
    it('should return undefined if not found - findByName', () => {
        const instance = new Components();
        const component = instance.findByName('aaaaa');
        expect(component).toBeUndefined();
    });
});
