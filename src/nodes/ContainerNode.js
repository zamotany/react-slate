/* @flow */

import readline from 'readline';
import enhanceConsole from '../effects/enhanceConsole';
import { hideCursorGlobally } from '../effects/cursor';

type Options = {
  // @TODO: add clearOnExit option
  debug: boolean,
  hideCursor: boolean,
  exitOnWarning: boolean,
  exitOnError: boolean,
};

type Chunk = {
  data: string,
};

export default class ContainerNode {
  children = [];
  frontBuffer: Chunk[] = [];
  backBuffer: Chunk[] = [];
  stream: any = null;
  options: Options;

  constructor(stream: any, opts?: Options) {
    this.options = {
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
      hideCursorGlobally(this.stream);
    }
  }

  appendChild(child: { render: Function }) {
    this.children.push(child);
  }

  write(data: string) {
    this.frontBuffer.push({ data });
  }

  normalizeFrontBuffer() {
    const normalizedBuffer = [];
    this.frontBuffer.forEach(chunk => {
      const lines = chunk.data.split('\n');
      const hasNewLines = chunk.data.includes('\n');

      if (!hasNewLines) {
        normalizedBuffer.push(chunk);
      } else {
        lines
          .slice(0, lines.length - 1)
          .map(line => (line === '' ? '\n' : line))
          .forEach(line => {
            normalizedBuffer.push({ data: line });
          });
      }
    });

    this.frontBuffer = normalizedBuffer;
  }

  getDiffFromBuffers() {
    const areLengthsEqual = this.backBuffer.length === this.frontBuffer.length;

    const diff = [];

    let index = 0;
    let absIndex = 0;
    for (const chunk of this.frontBuffer) {
      const isMismatch =
        !this.backBuffer[index] || this.backBuffer[index].data !== chunk.data;
      if (isMismatch && areLengthsEqual) {
        // If line mismatches but lengths are the same -> get multiple line diffs
        diff.push({ dataToAppend: chunk.data, location: absIndex });
      } else if (isMismatch) {
        // If line mismatches and lengths are not the same -> concat everything below to single diff
        diff.push({
          dataToAppend: this.frontBuffer
            .slice(index)
            .map(({ data }) => data)
            .join(''),
          location: index,
        });
        break;
      }

      if (chunk.data !== '\n' || this.frontBuffer[index - 1].data === '\n') {
        absIndex++;
      }
      index++;
    }

    return {
      isSingleLine: areLengthsEqual && diff.length === 1,
      diff,
    };
  }

  flush() {
    this.backBuffer = [...this.frontBuffer];
    this.frontBuffer = [];

    this.children.forEach(child => child.render());
    this.normalizeFrontBuffer();

    const { isSingleLine, diff } = this.getDiffFromBuffers();
    if (!diff.length) {
      return;
    }

    if (!isSingleLine && diff.length === 1) {
      const { dataToAppend, location } = diff[0];
      readline.cursorTo(this.stream, 0, location);
      readline.clearScreenDown(this.stream);
      this.stream.write(dataToAppend);
    } else {
      diff.forEach(({ dataToAppend, location }) => {
        readline.cursorTo(this.stream, 0, location);
        readline.clearLine(this.stream, 0);
        this.stream.write(dataToAppend);
      });
    }

    if (!this.options.hideCursor) {
      // @TODO: fix location
      readline.cursorTo(this.stream, 0, this.frontBuffer.length);
    }
  }
}
