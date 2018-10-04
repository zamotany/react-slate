/* @flow */

import React from 'react';
import { renderToTerminal, Terminal, App, Log } from '@react-slate/core';
import ws from 'ws';
import Application from './App';

const server = new ws.Server({
  host: 'localhost',
  port: '9000',
});

Terminal.clearScrollback();
Terminal.hideCursor();
App.onExit(() => {
  Terminal.showCursor();
  Terminal.clearScrollback();
});
Log.pipeConsole();

renderToTerminal(<Application server={server} />, process.stdout);
