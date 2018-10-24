/* @flow */

import { Log } from '../';
import type { Target } from '../types';

export default function withDevtools(target: Target) {
  try {
    const {
      withRemoteProfiler,
      compose,
      captureLogs,
    } = require('@react-slate/devtools'); // eslint-disable-line global-require

    return compose(
      withRemoteProfiler,
      captureLogs(Log._emitter)
    )(target);
  } catch (error) {
    return target;
  }
}
