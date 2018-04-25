import React from 'react';
import { renderToTerminal } from 'react-slate';
import {
  hideCursor,
  clearScrollbackOnExit,
  overwriteConsole,
} from 'react-slate-utils';
import App from './App';

hideCursor(process.stdout);
clearScrollbackOnExit(process.stdout);
overwriteConsole({
  outStream: './node_modules/.artifacts/stdout.log',
  errStream: './node_modules/.artifacts/stderr.log',
});

renderToTerminal(<App />, process.stdout);
