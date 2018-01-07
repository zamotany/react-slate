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

process.on('uncaughtException', error => {
  throwError(error);
});

process.on('unhandledRejection', reason => {
  throwError(new Error(`Unhandled rejection: ${reason}`));
});

clearCallbacksOnExit();

const NodeStreamReconciler = ReactFiberReconciler(hostConfig);

type Options = {
  debug?: boolean,
  hideCursor?: boolean,
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

  if (options.clearScreenOnExit) {
    clearOnExit(stream);
  }

  if (options.clearScrollbackOnExit) {
    clearScrollbackOnExit(stream);
  }

  const container = new ContainerNode(stream);
  const NodeStreamReconciler = ReactFiberReconciler(hostConfig(container));
  const node = NodeStreamReconciler.createContainer(container);
  NodeStreamReconciler.updateContainer(element, node, null);
}

export * from './components';
export * from './constants/asciiCodes';
export { default as colors } from './constants/colors';
