import React from 'react';
// eslint-disable-next-line
import { render, Chunk, Endl, Text } from 'react-stream-renderer';

import Dev from './dev';
import ListViewer from './listViewer';
import HaulCLI from './haulCLI';

let App;

switch (process.argv[2]) {
  case 'dev':
    App = Dev;
    break;
  case 'haul-cli':
    App = HaulCLI;
    break;
  case 'list-viewer':
  default:
    App = ListViewer;
}

render(<App />, process.stdout, {
  debug: false,
  renderOptimizations: false,
  hideCursor: false,
  exitOnError: true,
});
