/* @flow */

import onExit from './utils/onExit';

export * from './components';
export { default as colors } from './constants/colors';
export {
  default as renderToTerminal,
  unmountFromTerminal,
} from './public/renderToTerminal';
export { default as renderToString } from './public/renderToString';
export { default as renderToTarget } from './public/render';

export const Internal = {
  onExit,
};
