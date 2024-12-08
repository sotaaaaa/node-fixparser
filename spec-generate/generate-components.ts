import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const components = json.components.component;

const header = `interface Ref {
    id: number;
    added: string;
    presence?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    description?: string;
}

export interface ISpecComponents {
    id: number;
    name: string;
    category: string;
    abbrName: string;
    description: string;
    added: string;
    fieldRef?: Ref[];
    groupRef?: Ref[];
    componentRef?: Ref[];
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
}

export const COMPONENTS: ISpecComponents[] =`;
const footer = ';';

const processRef = (refs) => {
    const refsInputArray = Array.isArray(refs) ? refs : [refs];

    const refArray = [];
    for (const ref of refsInputArray) {
        if (ref?.annotation) {
            const description = ref.annotation?.documentation;
            ref.annotation = undefined;
            if (Array.isArray(description)) {
                ref.description = description.join('\n\n');
            } else if (description) {
                ref.description = description.$t;
            }
        }

        ref.id = Number(ref.id);

        refArray.push(ref);
    }
    return refArray;
};

const application = () => {
    const arr = [];

    for (const component of components) {
        if (component?.annotation) {
            const description = component.annotation?.documentation;
            component.annotation = undefined;
            if (Array.isArray(description)) {
                component.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                component.description = description.$t;
            }
        }

        if (component?.fieldRef) {
            component.fieldRef = processRef(component.fieldRef);
        }

        if (component?.groupRef) {
            component.groupRef = processRef(component.groupRef);
        }

        if (component?.componentRef) {
            component.componentRef = processRef(component.componentRef);
        }

        component.id = Number(component.id);

        arr.push(component);
    }

    const output = `${header}${JSON.stringify(arr, null, 2)}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecComponents.ts`, output);
};

application();
