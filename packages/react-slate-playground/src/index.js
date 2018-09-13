import React from 'react';
import path from 'path';
import { renderToTerminal } from '@react-slate/core';
import {
  hideCursor,
  clearScrollbackOnExit,
  overwriteConsole,
} from '@react-slate/utils';
import throttle from 'lodash.throttle';
import App from './App';

overwriteConsole({
  outStream: path.join(__dirname, '../node_modules/.artifacts/stdout.log'),
  errStream: path.join(__dirname, '../node_modules/.artifacts/stderr.log'),
});
hideCursor(process.stdout);
clearScrollbackOnExit(process.stdout);

const options = {
  /* devtools: true */
};
renderToTerminal(<App />, process.stdout, options);

process.on(
  'resize',
  throttle(() => {
    renderToTerminal(<App />, process.stdout, options);
  }, 100)
);
