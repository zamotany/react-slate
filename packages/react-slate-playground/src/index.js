import React from 'react';
import path from 'path';
import { renderToTerminal } from 'react-slate';
import {
  hideCursor,
  clearScrollbackOnExit,
  overwriteConsole,
} from 'react-slate-utils';
import App from './App';

overwriteConsole({
  outStream: path.join(__dirname, '../node_modules/.artifacts/stdout.log'),
  errStream: path.join(__dirname, '../node_modules/.artifacts/stderr.log'),
});
hideCursor(process.stdout);
clearScrollbackOnExit(process.stdout);

renderToTerminal(<App />, process.stdout);
