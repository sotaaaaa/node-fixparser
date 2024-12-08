import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const fields = json.fields.field;

const header = `export interface ISpecFields {
    id: number;
    type: string;
    name: string;
    description?: string;
    abbrName?: string;
    added?: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    deprecated?: string;
    deprecatedEP?: string;
    baseCategory?: string;
    baseCategoryAbbrName?: string;
    unionDataType?: string;
    lengthId?: string;
    discriminatorId?: string;
}
`;
const footer =
    'export const FIELDS: ISpecFields[] = batch1.concat(batch2, batch3, batch4, batch5, batch6, batch7, batch8);';

const application = () => {
    const fieldArray1 = [];
    const fieldArray2 = [];
    const fieldArray3 = [];
    const fieldArray4 = [];
    const fieldArray5 = [];
    const fieldArray6 = [];
    const fieldArray7 = [];
    const fieldArray8 = [];
    const mod = Math.floor(fields.length / 8);

    let index = 0;
    let batch = -1;
    for (const field of fields) {
        if (index % mod === 0) {
            batch++;
        }
        const { annotation, ...fieldData } = field;

        const description = field.annotation?.documentation;
        if (Array.isArray(description)) {
            fieldData.description = description.map((doc) => doc.$t).join('\n\n');
        } else if (description) {
            fieldData.description = description.$t;
        }

        fieldData.id = Number(fieldData.id);

        if (batch === 0) {
            fieldArray1.push(fieldData);
        } else if (batch === 1) {
            fieldArray2.push(fieldData);
        } else if (batch === 2) {
            fieldArray3.push(fieldData);
        } else if (batch === 3) {
            fieldArray4.push(fieldData);
        } else if (batch === 4) {
            fieldArray5.push(fieldData);
        } else if (batch === 5) {
            fieldArray6.push(fieldData);
        } else if (batch === 6) {
            fieldArray7.push(fieldData);
        } else {
            fieldArray8.push(fieldData);
        }

        index++;
    }

    const output1 = `const batch1: ISpecFields[] = ${JSON.stringify(fieldArray1)};\n\n`;
    const output2 = `const batch2: ISpecFields[] = ${JSON.stringify(fieldArray2)};\n\n`;
    const output3 = `const batch3: ISpecFields[] = ${JSON.stringify(fieldArray3)};\n\n`;
    const output4 = `const batch4: ISpecFields[] = ${JSON.stringify(fieldArray4)};\n\n`;

    const output5 = `const batch5: ISpecFields[] = ${JSON.stringify(fieldArray5)};\n\n`;
    const output6 = `const batch6: ISpecFields[] = ${JSON.stringify(fieldArray6)};\n\n`;
    const output7 = `const batch7: ISpecFields[] = ${JSON.stringify(fieldArray7)};\n\n`;
    const output8 = `const batch8: ISpecFields[] = ${JSON.stringify(fieldArray8)};\n\n`;

    const output = `${header}${output1}${output2}${output3}${output4}${output5}${output6}${output7}${output8}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecFields.ts`, output);
};

application();
