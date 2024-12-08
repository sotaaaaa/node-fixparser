import { Transform, type TransformCallback, type TransformOptions } from 'node:stream';

export class FrameDecoder extends Transform {
  public data: string | null;

  constructor(opts?: TransformOptions) {
    super(opts);
    this.data = '';
  }

  public override _transform(
    chunk: string,
    encoding: string,
    callback: TransformCallback
  ): void {
    const chunks: string[] = (String(this.data) + chunk).split(
      /(8=.+?\x0110=\d\d\d\x01)/gs
    );
    let i = 0;
    for (i; i < chunks.length - 1; i++) {
      this.push(chunks[i]);
    }
    this.data = chunks[chunks.length - 1];
    callback();
  }

  public override destroy(error?: Error) {
    this.data = null;
    return super.destroy(error);
  }
}
