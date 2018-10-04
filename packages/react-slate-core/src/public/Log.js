/* @flow */

import path from 'path';
import fs from 'fs';
import mkdir from 'mkdirp';

import type { OutputStream } from '../types';

function create(level: string, customConsole: typeof console) {
  return (...args: any[]) => {
    const timestamp = `[${new Date().toISOString()}]`;
    if (level === 'assert') {
      customConsole.assert(...args, timestamp);
    } else {
      customConsole[level](timestamp, level[0].toUpperCase(), ...args);
    }
  };
}

// $FlowFixMe
const Console: typeof console.Console =
  process.env.NODE_ENV === 'test' ? class {} : global.console.Console;

class NoopStream extends fs.WriteStream {
  open() {}
  _write(chunk, enc, next) {
    next();
    return true;
  }
}

export class Logger {
  _stdoutStream: OutputStream;
  _stderrStream: OutputStream;
  _console: typeof console;

  constructor(
    stdoutPath: string = './node_modules/.artifacts/stdout.log',
    stderrPath: string = './node_modules/.artifacts/stderr.log'
  ) {
    const stdout = path.resolve(stdoutPath);
    const stderr = path.resolve(stderrPath);
    mkdir.sync(path.dirname(stdout));
    mkdir.sync(path.dirname(stderr));
    this._stdoutStream = fs.createWriteStream(stdout);
    this._stderrStream = fs.createWriteStream(stderr);
    this._console = new Console(this._stdoutStream, this._stderrStream);
  }

  debug = create('debug', this._console);
  error = create('error', this._console);
  warn = create('warn', this._console);
  info = create('info', this._console);
  assert = create('assert', this._console);
  d = this.debug;
  e = this.error;
  w = this.warn;
  i = this.info;
  a = this.assert;

  silenceConsole() {
    // $FlowFixMe
    Object.defineProperty(global, 'console', {
      configurable: true,
      enumerable: true,
      get: () => new Console(new NoopStream(), new NoopStream()),
    });
  }

  pipeConsole() {
    // $FlowFixMe
    Object.defineProperty(global, 'console', {
      configurable: true,
      enumerable: true,
      get: () => this._console,
    });
  }

  resetConsole() {
    // $FlowFixMe
    Object.defineProperty(global, 'console', {
      configurable: true,
      enumerable: true,
      get: () => new Console(process.stdout, process.stderr),
    });
  }
}

export default new Logger();
