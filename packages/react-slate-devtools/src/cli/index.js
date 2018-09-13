/* @flow */

import React from 'react';
import { renderToTerminal } from '@react-slate/core';
import { hideCursor, overwriteConsole } from '@react-slate/utils';
import ws from 'ws';
import path from 'path';
import App from './App';

overwriteConsole({
  outStream: path.join(__dirname, '../../node_modules/.artifacts/stdout.log'),
  errStream: path.join(__dirname, '../../node_modules/.artifacts/stderr.log'),
});

const server = new ws.Server({
  host: 'localhost',
  port: '9000',
});

hideCursor(process.stdout);
renderToTerminal(<App server={server} />, process.stdout);
