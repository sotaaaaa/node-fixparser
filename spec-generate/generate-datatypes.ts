import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const datatypes = json.datatypes.datatype;

const header = `export interface ISpecDatatypes {
    name: string;
    added: string;
    addedEP?: string;
    updated?: string;
    updatedEP?: string;
    baseType?: string;
    mappedDatatype?: {
        builtin: string;
        base: string;
        standard: string;
        minInclusive?: string;
        pattern?: string;
        description?: string;
    };
    description?: string;
}
export const DATATYPES: ISpecDatatypes[] =`;
const footer = ';';

const application = () => {
    const arr = [];

    for (const dataType of datatypes) {
        if (dataType?.mappedDatatype?.annotation) {
            const description = dataType.mappedDatatype?.annotation?.documentation;
            dataType.mappedDatatype.annotation = undefined;

            if (Array.isArray(description)) {
                dataType.mappedDatatype.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                dataType.mappedDatatype.description = description.$t;
            }
        }

        if (dataType?.annotation) {
            const description = dataType.annotation?.documentation;
            dataType.annotation = undefined;
            if (Array.isArray(description)) {
                dataType.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                dataType.description = description.$t;
            }
        }

        arr.push(dataType);
    }

    const output = `${header}${JSON.stringify(arr, null, 2)}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecDataTypes.ts`, output);
};

application();
