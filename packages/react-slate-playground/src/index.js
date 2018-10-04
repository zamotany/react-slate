import React from 'react';
import { renderToTerminal, App, Log, Terminal } from '@react-slate/core';
import throttle from 'lodash.throttle';
import Application from './App';

Terminal.clearScrollback();
Terminal.hideCursor();
App.onExit(() => {
  Terminal.showCursor();
  Terminal.clearScrollback();
});
Log.pipeConsole();

const options = {
  devtools: true,
};
renderToTerminal(<Application />, process.stdout, options);

process.on(
  'resize',
  throttle(() => {
    renderToTerminal(<Application />, process.stdout, options);
  }, 100)
);
