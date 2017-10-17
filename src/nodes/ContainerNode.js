/* @flow */

import readline from 'readline';

type Options = {
  renderOptimizations: boolean,
  debug: boolean,
  hideCursor: boolean,
};

export default class ContainerNode {
  children = [];
  frontBuffer: string = '';
  backBuffer: string = '';
  stream: any = null;
  options: Options;

  constructor(stream: any, opts?: Options = {}) {
    this.options = {
      renderOptimizations: false,
      debug: false,
      hideCursor: false,
      ...opts,
    };
    this.stream = stream;

    if (this.options.hideCursor) {
      this.stream.write('\x1B[?25l');
    }
  }

  write(data: string) {
    this.frontBuffer += data;
  }

  appendChild(child: { render: Function }) {
    this.children.push(child);
  }

  diffBuffers() {
    if (!this.options.renderOptimizations || !this.backBuffer.length) {
      return 0;
    }

    const backBuffer = this.backBuffer.split('\n');
    const frontBuffer = this.frontBuffer.split('\n');

    let index = 0;
    for (const frontLine of frontBuffer) {
      if (backBuffer[index] !== frontLine) {
        break;
      }
      index++;
    }

    return index;
  }

  withDebugInfo(body: string, { splitPoint }: { splitPoint: number }) {
    let debugInfo = `${'='.repeat(10)} DEBUG ${'='.repeat(10)}\n`;
    debugInfo += `  frontBuffer.length: ${this.backBuffer.length}\n`;
    debugInfo += `  backBuffer.length: ${this.frontBuffer.length}\n`;
    debugInfo += `  renderOptimizations: ${this.options.renderOptimizations
      ? 'enabled'
      : 'disabled'}\n`;
    debugInfo += `  frontBuffer splitPoint: ${splitPoint}\n`;
    return `${body}\n\n${debugInfo}`;
  }

  getOutput(splitPoint?: number) {
    let body;
    if (splitPoint) {
      body = `${this.frontBuffer
        .split('\n')
        .slice(splitPoint)
        .join('\n')}\n`;
    } else {
      body = `${this.frontBuffer}\n`;
    }

    if (this.options.debug) {
      return this.withDebugInfo(body, { splitPoint: splitPoint || 0 });
    }
    return body;
  }

  flush() {
    this.backBuffer = this.frontBuffer.split('\n').join('\n');
    this.frontBuffer = '';

    this.children.forEach(child => child.render());

    if (this.backBuffer === this.frontBuffer) {
      return;
    }

    const splitPoint = this.diffBuffers();

    readline.cursorTo(this.stream, 0, splitPoint);
    readline.clearScreenDown(this.stream);
    this.stream.write(this.getOutput(splitPoint));
  }
}
