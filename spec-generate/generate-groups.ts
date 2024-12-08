import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const groups = json.groups.group;

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

export interface ISpecGroups {
    id: number;
    name: string;
    category: string;
    abbrName: string;
    description: string;
    added: string;
    fieldRef?: Ref[];
    groupRef?: Ref[];
    componentRef?: Ref[];
    numInGroup: {
        id: number;
        added?: string;
        addedEP?: string;
        updated?: string;
        updatedEP?: string;
        deprecated?: string;
        deprecatedEP?: string;
        description?: string;
    };
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
}

export const GROUPS: ISpecGroups[] =`;
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

    for (const group of groups) {
        if (group?.annotation) {
            const description = group.annotation?.documentation;
            group.annotation = undefined;
            if (Array.isArray(description)) {
                group.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                group.description = description.$t;
            }
        }

        if (group?.fieldRef) {
            group.fieldRef = processRef(group.fieldRef);
        }

        if (group?.groupRef) {
            group.groupRef = processRef(group.groupRef);
        }

        if (group?.componentRef) {
            group.componentRef = processRef(group.componentRef);
        }

        if (group?.numInGroup) {
            group.numInGroup.id = Number(group.numInGroup.id);
        }

        if (group?.numInGroup?.annotation) {
            const description = group?.numInGroup?.annotation.documentation;
            group.numInGroup.annotation = undefined;
            if (Array.isArray(description)) {
                group.numInGroup.description = description.join('\n\n');
            } else if (description) {
                group.numInGroup.description = description.$t;
            }
        }

        group.id = Number(group.id);

        arr.push(group);
    }

    const output = `${header}${JSON.stringify(arr, null, 2)}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecGroups.ts`, output);
};

application();
