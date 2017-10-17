import React from 'react';
// eslint-disable-next-line
import { render, Chunk, Endl, Text } from 'react-stream-renderer';

import Dev from './dev';
import ListViewer from './listViewer';

let App;

switch (process.argv[2]) {
  case 'dev':
    App = Dev;
    break;
  case 'list-viewer':
  default:
    App = ListViewer;
}

render(<App />, process.stdout, {
  debug: false,
  renderOptimizations: false,
  hideCursor: true,
});
