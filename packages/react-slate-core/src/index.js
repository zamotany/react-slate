/* @flow */

import onExit from './utils/onExit';

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

export const Internal = {
  onExit,
};

export type {
  Props,
  Style,
  // CustomRender,
  NodeStream,
  Target,
} from './types';
