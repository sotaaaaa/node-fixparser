import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(parser.toJson(fixLatest)).repository;
const categories = json.categories.category;

const header = `export interface ISpecCategories {
    name: string;
    FIXMLFileName: string;
    componentType: string;
    section?: string;
    added?: string;
    addedEP?: string;
    includeFile?: string;
    description?: string;
}
export const CATEGORIES: ISpecCategories[] =`;
const footer = ';';

const application = () => {
    const arr = [];

    for (const category of categories) {
        if (category?.annotation) {
            const description = category.annotation?.documentation;
            category.annotation = undefined;
            if (Array.isArray(description)) {
                category.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                category.description = description.$t;
            }
        }

        arr.push(category);
    }

    const output = `${header}${JSON.stringify(arr, null, 2)}${footer}`;
    writeFileSync(`${TARGET_DIR}/SpecCategories.ts`, output);
};

application();
