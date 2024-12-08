import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';

import parser from 'xml2json';

const TARGET_DIR = join(__dirname, '../src/fieldtypes');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const fields = JSON.parse(parser.toJson(fixLatest)).repository.fields.field;
const codeSets = JSON.parse(parser.toJson(fixLatest)).repository.codeSets.codeSet;
const messages = JSON.parse(parser.toJson(fixLatest)).repository.messages.message;

const indexSet = new Set<string>();

const removeCodeSet = (name: string) => name.replace('CodeSet', '');
const mapCodeSetType = (value: string, valueType: string) => {
    if (valueType === 'int' || valueType === 'NumInGroup') {
        return { value: `${value}`, typeName: 'number' };
    }
    return { value: `'${value}'`, typeName: 'string' };
};

codeSets.forEach((codeSet) => {
    if (codeSet.code && Array.isArray(codeSet.code)) {
        const codeSetName = removeCodeSet(codeSet.name);
        const indexFileEntry = `export { ${codeSetName} } from './${codeSetName}';`;
        indexSet.add(indexFileEntry);

        const codeSetArray = [];

        codeSet.code
            .sort((a, b) => Number(a.sort) - Number(b.sort))
            .forEach((value) => {
                const docsCode = value.annotation?.documentation?.$t
                    ? `/** ${value.annotation.documentation.$t} */\n  `
                    : '';
                codeSetArray.push(`${docsCode}${value.name} = ${mapCodeSetType(value.value, codeSet.type).value}`);
            });

        const docsCodeSet = codeSet.annotation?.documentation?.$t
            ? `/**
 * ${codeSet.annotation.documentation.$t}
 * tag: ${codeSet.id}
 * @readonly
 * @enum {${mapCodeSetType('', codeSet.type).typeName}} (${codeSet.type})
 */\n`
            : '';
        const enumString = `${docsCodeSet}export enum ${codeSetName} {
  ${codeSetArray.join(',\n  ')}
}`;
        writeFileSync(`${TARGET_DIR}/${codeSetName}.ts`, enumString);
    }
});

// FIELD ENUM
const fieldMap = new Map<string, { docs: string; nameValue: string }>();

fields
    .sort((a, b) => Number(a.id) - Number(b.id))
    .forEach((field) => {
        const fieldDocs = field.annotation?.documentation?.$t ? `/** ${field.annotation.documentation.$t} */\n  ` : '';
        fieldMap.set(field.name, { docs: fieldDocs, nameValue: `${field.name} = ${field.id}` });
    });

let fieldCodeSetString = 'export enum Field {\n  ';
Array.from(fieldMap).forEach((field) => {
    fieldCodeSetString += `${field[1].docs}${field[1].nameValue},\n  `;
});
fieldCodeSetString += '}';

writeFileSync(`${TARGET_DIR}/Field.ts`, fieldCodeSetString);

const fieldCodeSetEntry = `export { Field as Fields } from './Field';`;
indexSet.add(fieldCodeSetEntry);

// MESSAGE ENUM
const messageMap = new Map<string, { docs: string; nameValue: string }>();

messages
    .sort((a, b) => Number(a.id) - Number(b.id))
    .forEach((message) => {
        const messageDocs = message.annotation?.documentation?.$t
            ? `/** ${message.annotation.documentation.$t} */\n  `
            : '';
        messageMap.set(message.name, { docs: messageDocs, nameValue: `${message.name} = '${message.msgType}'` });
    });

let messageCodeSetString = 'export enum Message {\n  ';
Array.from(messageMap).forEach((message) => {
    messageCodeSetString += `${message[1].docs}${message[1].nameValue},\n  `;
});
messageCodeSetString += '}';

writeFileSync(`${TARGET_DIR}/Message.ts`, messageCodeSetString);

const messageCodeSetEntry = `export { Message as Messages } from './Message';`;
indexSet.add(messageCodeSetEntry);

// MAIN INDEX FILE
const indexFileString = Array.from(indexSet).join('\n');
writeFileSync(`${TARGET_DIR}/index.ts`, indexFileString);
