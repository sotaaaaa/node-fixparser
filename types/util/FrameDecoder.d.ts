import { Transform, type TransformCallback, type TransformOptions } from 'node:stream';
export declare class FrameDecoder extends Transform {
    data: string | null;
    constructor(opts?: TransformOptions);
    _transform(chunk: string, encoding: string, callback: TransformCallback): void;
    destroy(error?: Error): this;
}
