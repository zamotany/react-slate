/* @flow */

import readline from 'readline';
import enhanceConsole from '../effects/enhanceConsole';
import hideCursor from '../effects/hideCursor';
import ChunkNode from './ChunkNode';

type Options = {
  // @TODO: add clearOnExit option
  renderOptimizations: boolean,
  debug: boolean,
  hideCursor: boolean,
  exitOnWarning: boolean,
  exitOnError: boolean,
};

export default class ContainerNode {
  children: ChunkNode[] = [];
  frontBuffer: string = '';
  backBuffer: string = '';
  stream: any = null;
  options: Options;

  constructor(stream: any, opts?: Options) {
    this.options = {
      renderOptimizations: false,
      debug: false,
      hideCursor: false,
      exitOnError: false,
      exitOnWarning: false,
      ...(opts || {}),
    };
    this.stream = stream;

    enhanceConsole({
      exitOnError: this.options.exitOnError,
      exitOnWarning: this.options.exitOnWarning,
    });

    if (this.options.hideCursor) {
      hideCursor(this.stream);
    }
  }

  invalidateParent = () => {
    /* NOOP */
  };

  appendChild(child: ChunkNode) {
    // eslint-disable-next-line no-param-reassign
    child.parent = this;
    this.children.push(child);
  }

  write(data: string) {
    this.frontBuffer += data;
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
