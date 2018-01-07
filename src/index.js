/* @flow */

// $FlowFixMe
import ReactFiberReconciler from 'react-reconciler';
import ContainerNode from './nodes/ContainerNode';
import hostConfig from './utils/hostConfig';
import { throwError } from './utils/throwError';
import clearCallbacksOnExit from './effects/clearCallbacksOnExit';
import overwriteConsole from './effects/overwriteConsole';
import {
  hideCursor,
  clearOnExit,
  clearScrollbackOnExit,
} from './effects/terminal';
import { exit } from './effects/utils';

// Overwrite default `process.exit` with custom one, which will
// execute `onExit` callbacks and then exit.
const _exit = process.exit.bind(process);
// $FlowFixMe
process.exit = exit;
// $FlowFixMe
process._exit = _exit;

process.on('uncaughtException', error => {
  throwError(error);
});

process.on('unhandledRejection', reason => {
  throwError(new Error(`Unhandled rejection: ${reason}`));
});

clearCallbacksOnExit();

type Options = {
  debug?: boolean,
  hideCursor?: boolean,
  clearOnError?: boolean,
  clearScreenOnExit?: boolean,
  clearScrollbackOnExit?: boolean,
  exitOnWarning?: boolean,
  exitOnError?: boolean,
  outStream?: any,
  errStream?: any,
};

export function render(element: any, stream: any, options?: Options = {}) {
  // Redirect console output to specified streams or files.
  overwriteConsole({
    exitOnError: Boolean(options.exitOnError),
    exitOnWarning: Boolean(options.exitOnWarning),
    outStream: options.outStream,
    errStream: options.errStream,
  });

  if (options.hideCursor) {
    hideCursor(stream);
  }

  // Clear screen when process is about to exit, unless
  // scrollback will be cleared - clearing scrollback also clears screen.
  if (options.clearScreenOnExit && !options.clearScrollbackOnExit) {
    clearOnExit(stream, Boolean(options.clearOnError));
  }

  if (options.clearScrollbackOnExit) {
    clearScrollbackOnExit(stream, Boolean(options.clearOnError));
  }

  const container = new ContainerNode(stream);
  const NodeStreamReconciler = ReactFiberReconciler(hostConfig(container));
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);
}

export * from './components';
export * from './constants/asciiCodes';
export { default as colors } from './constants/colors';
