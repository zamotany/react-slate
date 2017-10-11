/* @flow */

import readline from 'readline';

export default class StreamContainer {
  body: any = null;
  output: string = '';
  stream: any = null;

  constructor(stream: any) {
    this.stream = stream;
  }

  write(data: string) {
    this.output += data;
  }

  setBody(child: any) {
    this.body = child;
  }

  getOutput() {
    return `${this.output}\n`;
  }

  flush() {
    this.output = '';
    this.body.render();
    readline.cursorTo(this.stream, 0, 0);
    readline.clearScreenDown(this.stream);
    this.stream.write(this.getOutput());
  }
}
