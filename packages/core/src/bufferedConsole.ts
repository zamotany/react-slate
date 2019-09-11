import { Console } from 'console';
import stream from 'stream';
import { Terminal } from 'terminal-kit';

class ConsoleBuffer extends stream.Writable {
  constructor(private buffer: string[]) {
    super();
  }

  _write(chunk: Buffer, enc: string, next: () => void) {
    this.buffer.push(chunk.toString());
    next();
  }
}

export function createBufferedConsole() {
  let buffer: string[] = [];
  const stdout = new ConsoleBuffer(buffer);
  const stderr = new ConsoleBuffer(buffer);
  const bufferedConsole = new Console(stdout, stderr);
  return {
    bufferedConsole,
    flushConsole: (terminal: Terminal) => {
      buffer.forEach(message => {
        terminal(message);
      });
      buffer = [];
    },
  };
}
