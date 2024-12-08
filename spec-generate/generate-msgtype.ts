import { readFileSync, writeFileSync } from 'node:fs';
// https://github.com/FIXTradingCommunity/orchestrations/tree/master/FIX%20Standard
import { join } from 'node:path';
import parser from 'xml2json';

import type { MessageTypeStructure, Structure } from './../src/messagetype/MessageType';

const TARGET_DIR = join(__dirname, '../src/spec');

const fixLatest = readFileSync('./OrchestraFIXLatest.xml', { encoding: 'utf8', flag: 'r' });
const json = JSON.parse(
    parser.toJson(fixLatest, { arrayNotation: ['fieldRef', 'componentRef', 'groupRef', 'documentation'] }),
).repository;
const sections = json.sections.section;
const categories = json.categories.category;
const datatypes = json.datatypes.datatype;
const codeSets = json.codeSets.codeSet;
const fields = json.fields.field;
const components = json.components.component;
const groups = json.groups.group;
const messages = json.messages.message;

const restructureDocumentation = (structureData, fieldIdentifier: string) => {
    if (structureData[fieldIdentifier] && structureData[fieldIdentifier].length > 0) {
        for (const field of structureData[fieldIdentifier]) {
            const description = field.annotation?.documentation;
            field.annotation = undefined;
            if (Array.isArray(description)) {
                field.description = description.map((doc) => doc).join('\n\n');
            } else if (description) {
                field.description = description;
            }
        }
    }
};

const extractRequired = (structureData, fieldIdentifier: string) => {
    if (structureData[fieldIdentifier] && structureData[fieldIdentifier].length > 0) {
        for (const item of structureData[fieldIdentifier]) {
            if (fieldIdentifier === 'fieldRef') {
                const fieldIndex = fields.findIndex((fieldData) => fieldData.id === item.id);
                if (fieldIndex > -1) {
                    item.name = fields[fieldIndex].name;
                }
            }
        }
    }
};

const processStructure = (message: unknown, type: string): Structure[] => {
    const structureResult: Structure[] = [];
    const structureSource = message.structure?.[type];

    if (!structureSource || !Array.isArray(structureSource)) {
        return [];
    }

    const structureSourceFiltered = structureSource.filter((item) => item.presence === 'required');

    for (const item of structureSourceFiltered) {
        item.annotation = undefined;

        let data: any = {
            type: type.replace('Ref', ''),
        };

        if (type === 'fieldRef') {
            const fieldIndex = fields.findIndex((field) => field.id === item.id);
            if (fieldIndex > -1) {
                if (fields[fieldIndex].fieldRef) {
                    fields[fieldIndex].fieldRef = fields[fieldIndex].fieldRef.filter(
                        (item) => item.presence === 'required',
                    );
                }
                data = {
                    ...data,
                    ...fields[fieldIndex],
                };
            }
        } else if (type === 'componentRef') {
            const componentsIndex = components.findIndex((component) => component.id === item.id);
            if (componentsIndex > -1) {
                if (components[componentsIndex].componentRef) {
                    components[componentsIndex].componentRef = components[componentsIndex].fieldRef.filter(
                        (item) => item.presence === 'required',
                    );
                }
                data = {
                    ...data,
                    ...components[componentsIndex],
                };
            }
        } else if (type === 'groupRef') {
            const groupIndex = groups.findIndex((group) => group.id === item.id);
            if (groupIndex > -1) {
                data = {
                    ...data,
                    ...groups[groupIndex],
                };
            }
        }

        if (data.fieldRef && data.fieldRef.length > 0) {
            data.fieldRef = data.fieldRef.filter((item) => item.presence === 'required');
        }

        if (data.componentRef && data.componentRef.length > 0) {
            data.componentRef = data.componentRef.filter((item) => item.presence === 'required');
        }

        if (data.groupRef && data.groupRef.length > 0) {
            data.groupRef = data.groupRef.filter((item) => item.presence === 'required');
        }

        // Check for nulls
        if (data.fieldRef?.length === 0) {
            data.fieldRef = undefined;
        }
        if (data.componentRef?.length === 0) {
            data.componentRef = undefined;
        }
        if (data.groupRef?.length === 0) {
            data.groupRef = undefined;
        }

        restructureDocumentation(data, 'fieldRef');
        restructureDocumentation(data, 'groupRef');
        restructureDocumentation(data, 'componentRef');

        if (item.presence === 'required') {
            extractRequired(data, 'fieldRef');
            extractRequired(data, 'groupRef');
            extractRequired(data, 'componentRef');
        }

        // if (data.type.includes('CodeSet')) {
        //     const codeSetIndex = codeSets.findIndex((codeSet) => codeSet.name === data.type);
        //     if (codeSetIndex > -1) {
        //         data = {
        //             ...data,
        //             codeSet: {
        //                 ...codeSets[codeSetIndex],
        //                 code: codeSets[codeSetIndex].code.map((code) => {
        //                     // Replace annotation in item.data.annotation
        //                     const codeDescription = code.annotation?.documentation;
        //                     code.annotation = undefined;
        //                     if (Array.isArray(codeDescription)) {
        //                         code.description = codeDescription.map((doc) => doc.$t).join('\n\n');
        //                     } else if (codeDescription) {
        //                         code.description = codeDescription;
        //                     }
        //
        //                     return code;
        //                 }),
        //             },
        //         };
        //
        //         // Replace annotation in item.data.annotation
        //         const codeSetDescription = data.codeSet.annotation?.documentation;
        //         data.codeSet.annotation = undefined;
        //         if (Array.isArray(codeSetDescription)) {
        //             data.codeSet.description = codeSetDescription.map((doc) => doc.$t).join('\n\n');
        //         } else if (codeSetDescription) {
        //             data.codeSet.description = codeSetDescription;
        //         }
        //     }
        // }

        // Add data to each entry..
        item.data = data;

        // Replace annotation in item.data.numInGroup.annotation
        const numInGroupDescription = item.data.numInGroup?.annotation?.documentation;

        if (numInGroupDescription) {
            item.data.numInGroup.annotation = undefined;
        }
        if (Array.isArray(numInGroupDescription)) {
            item.data.description = numInGroupDescription.map((doc) => doc.$t).join('\n\n');
        } else if (numInGroupDescription) {
            item.data.description = numInGroupDescription;
        }

        // Replace annotation in item.data.annotation
        const dataDescription = item.data.annotation?.documentation;
        item.data.annotation = undefined;
        if (Array.isArray(dataDescription)) {
            item.data.description = dataDescription.map((doc) => doc.$t).join('\n\n');
        } else if (dataDescription) {
            item.data.description = dataDescription;
        }

        const description = item?.annotation?.documentation;
        item.annotation = undefined;
        if (Array.isArray(description)) {
            item.description = description.map((doc) => doc.$t).join('\n\n');
        } else if (description) {
            item.description = description;
        }

        structureResult.push(item);
    }

    return structureResult;
};

const application = () => {
    const messageMap = new Map<string, MessageTypeStructure>();

    for (const message of messages) {
        const componentRefs = processStructure(message, 'componentRef');
        const fieldRefs = processStructure(message, 'fieldRef');
        const groupRefs = processStructure(message, 'groupRef');

        if (componentRefs?.length > 0 || fieldRefs?.length > 0 || groupRefs?.length > 0) {
            message.structure = [].concat(componentRefs, fieldRefs, groupRefs).sort((a, b) => {
                if (a.id === '1024' || b.id === '1024') {
                    return 1000;
                }
                if (a.id === '1025' || b.id === '1025') {
                    return -1000;
                }

                return Number(a.id) - Number(b.id);
            });
        }

        const categoryIndex = categories.findIndex((category) => category.name === message.category);
        if (message.category && categoryIndex >= 0) {
            message.category = categories[categoryIndex];

            const description = message.category.annotation?.documentation;
            message.category.annotation = undefined;
            if (Array.isArray(description)) {
                message.category.description = description.map((doc) => doc.$t).join('\n\n');
            } else if (description) {
                message.category.description = description.$t;
            }

            const sectionIndex = sections.findIndex((section) => section.name === categories[categoryIndex].section);
            if (sectionIndex >= 0) {
                message.section = sections[sectionIndex];

                const description = message.section.annotation?.documentation;
                message.section.annotation = undefined;
                if (Array.isArray(description)) {
                    message.section.description = description.map((doc) => doc.$t).join('\n\n');
                } else if (description) {
                    message.section.description = description.$t;
                }
            }
        }

        const description = message?.annotation?.documentation;
        message.annotation = undefined;
        if (Array.isArray(description)) {
            message.description = description.map((doc) => doc.$t).join('\n\n');
        } else if (description) {
            message.description = description.$t;
        }

        messageMap.set(message.msgType, message);
    }

    const output = Object.fromEntries(messageMap);
    writeFileSync(`${TARGET_DIR}/MessageType.json`, JSON.stringify(output));
};

application();
