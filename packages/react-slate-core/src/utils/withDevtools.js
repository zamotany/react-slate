/* @flow */

import type { Target } from '../types';

export default function withDevtools(target: Target) {
  try {
    // eslint-disable-next-line global-require
    const { withRemoteProfiler, compose } = require('@react-slate/devtools');
    return compose(withRemoteProfiler)(target);
  } catch (error) {
    return target;
  }
}
