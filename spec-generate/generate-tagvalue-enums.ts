import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const codeSets = json.codeSets.codeSet;

const header = `export interface ISpecEnums {
   name: string;
    id: string;
    tag: number;
    type: string;
    codeSet: string;
    value: string;
    sort?: number;
    group?: string;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    description?: string;
}
`;
const footer = 'export const ENUMS: ISpecEnums[] = batch1.concat(batch2, batch3, batch4);';

const application = () => {
    const codeSetArray1 = [];
    const codeSetArray2 = [];
    const codeSetArray3 = [];
    const codeSetArray4 = [];

    let index = 0;
    let batch = -1;
    for (const codeSet of codeSets) {
        const codeArray = Array.isArray(codeSet.code) ? codeSet.code : [codeSet.code];

        for (const code of codeArray) {
            if (index % 3000 === 0) {
                batch++;
            }
            const { annotation, ...codeData } = code;

            codeData.tag = Number(codeSet.id);
            codeData.type = codeSet.type;
            codeData.codeSet = codeSet.name;

            if (codeData.sort) {
                codeData.sort = Number(codeData.sort);
            }

            const description = code.annotation?.documentation;
            if (Array.isArray(description)) {
                codeData.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                codeData.description = description.$t;
            }

            if (batch === 0) {
                codeSetArray1.push(codeData);
            } else if (batch === 1) {
                codeSetArray2.push(codeData);
            } else if (batch === 2) {
                codeSetArray3.push(codeData);
            } else if (batch === 3) {
                codeSetArray4.push(codeData);
            }

            index++;
        }
    }

    const output1 = `const batch1: ISpecEnums[] = ${JSON.stringify(codeSetArray1)};\n\n`;
    const output2 = `const batch2: ISpecEnums[] = ${JSON.stringify(codeSetArray2)};\n\n`;
    const output3 = `const batch3: ISpecEnums[] = ${JSON.stringify(codeSetArray3)};\n\n`;
    const output4 = `const batch4: ISpecEnums[] = ${JSON.stringify(codeSetArray4)};\n\n`;

    const output = `${header}${output1}${output2}${output3}${output4}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecEnums.ts`, output);
};

application();
