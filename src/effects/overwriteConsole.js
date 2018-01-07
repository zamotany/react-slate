/* @flow */

import fs from 'fs';
import path from 'path';
import { exit } from './utils';

type Options = {
  exitOnWarning: boolean,
  exitOnError: boolean,
  outStream?: any,
  errStream?: any,
};

function createWriteStream(label: string, streamOrSpec: any) {
  return streamOrSpec && typeof streamOrSpec.write === 'function'
    ? streamOrSpec
    : fs.createWriteStream(
        path.resolve(
          typeof streamOrSpec === 'string' ? streamOrSpec : `./std${label}.log`
        )
      );
}

export default function overwriteConsole({
  exitOnWarning,
  exitOnError,
  outStream,
  errStream,
}: Options) {
  const out = createWriteStream('out', outStream);
  const err = createWriteStream('err', errStream);

  // $FlowFixMe
  const customConsole = new console.Console(out, err);

  const logWarning = customConsole.error.bind(customConsole);
  const logError = customConsole.error.bind(customConsole);

  customConsole.warn = (...args) => {
    logWarning(...args);
    if (exitOnWarning) {
      exit(1);
    }
  };

  customConsole.warn.raw = logWarning;

  customConsole.error = (...args) => {
    logError(...args);
    if (exitOnError) {
      exit(1);
    }
  };

  customConsole.error.raw = logError;

  // $FlowFixMe
  Object.defineProperty(global, 'console', {
    configurable: true,
    enumerable: true,
    get: () => customConsole,
  });
}
