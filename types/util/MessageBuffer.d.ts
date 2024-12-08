import type { Message } from './../message/Message';
export declare const MAX_BUFFER: number;
export declare class MessageBuffer {
    private buffer;
    add(message: Message): void;
    getByMsgSequence(msgSequence: number): Message | null;
    size(): number;
    clear(): void;
}
