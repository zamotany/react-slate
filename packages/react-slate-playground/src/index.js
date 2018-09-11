import React from 'react';
import path from 'path';
import { renderToTarget, makeTerminalTarget } from '@react-slate/core';
import {
  hideCursor,
  clearScrollbackOnExit,
  overwriteConsole,
} from '@react-slate/utils';
// import throttle from 'lodash.throttle';
import App from './App';

overwriteConsole({
  outStream: path.join(__dirname, '../node_modules/.artifacts/stdout.log'),
  errStream: path.join(__dirname, '../node_modules/.artifacts/stderr.log'),
});
hideCursor(process.stdout);
clearScrollbackOnExit(process.stdout);

// process.stdout.write(renderToString(<App />));
const target = makeTerminalTarget(process.stdout);
renderToTarget(<App />, target);

// process.on(
//   'resize',
//   throttle(() => {
//     renderToTerminal(<App />, process.stdout);
//   }, 100)
// );
