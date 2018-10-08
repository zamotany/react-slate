/* @flow */

export {
  default as renderToTerminal,
  unmountFromTerminal,
  makeTerminalTarget,
} from './public/renderToTerminal';
export { default as renderToString } from './public/renderToString';
export { default as renderToTarget } from './public/render';
export { default as View } from './public/View';
// For compatibility
export { default as Text } from './public/View';

export { default as App } from './public/App';
export { default as Log, Logger } from './public/Log';
export { default as Terminal } from './public/Terminal';
export { default as getDetachedNode } from './utils/getDetachedNode';

export type { Props, Style, OutputStream, Target } from './types';
