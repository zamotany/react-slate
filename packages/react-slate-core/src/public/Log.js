/* @flow */

import path from 'path';
import fs from 'fs';
// $FlowFixMe
import { Console } from 'console';
import EventEmitter from 'events';
import mkdir from 'mkdirp';

function create(level: string, logger: Logger) {
  return (...args: any[]) => {
    const timestamp = `[${new Date().toISOString()}]`;
    logger._emitter.emit('log', {
      level,
      timestamp,
      messages: args,
    });
    if (level === 'assert') {
      if (args[0]) {
        logger._console.log(timestamp, 'A:', ...args.slice(1), 'PASSED');
      } else {
        logger._console.error(timestamp, 'A:', ...args.slice(1), 'FAILED');
      }
      logger._console.assert(...args, timestamp);
    } else {
      logger._console[level](timestamp, `${level[0].toUpperCase()}:`, ...args);
    }
  };
}

class NoopStream extends fs.WriteStream {
  open() {}
  _write(chunk, enc, next) {
    next();
    return true;
  }
}

class FileStream extends fs.WriteStream {
  constructor(filePath: string, options: mixed) {
    const absPath = path.resolve(filePath);
    mkdir.sync(path.dirname(absPath));
    // $FlowFixMe
    super(absPath, options);
  }
}

export default class Logger {
  _console: typeof console;
  _emitter = new EventEmitter();

  constructor(
    stdoutPath: string = './node_modules/.artifacts/stdout.log',
    stderrPath: string = './node_modules/.artifacts/stderr.log'
  ) {
    this.setOutput(stdoutPath, stderrPath);
  }

  debug = create('debug', this);
  error = create('error', this);
  warn = create('warn', this);
  info = create('info', this);
  assert = create('assert', this);
  d = this.debug;
  e = this.error;
  w = this.warn;
  i = this.info;
  a = this.assert;

  setOutput(stdoutPath: string, stderrPath: string) {
    try {
      this._console = new Console(
        new FileStream(stdoutPath),
        new FileStream(stderrPath)
      );
    } catch (error) {
      this._console = global.console;
    }
  }

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
