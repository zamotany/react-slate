/* @flow */

import type { Target } from '@react-slate/core';

export default function withRemoteProfiler(
  target: Target,
  send: (string | Object) => void
) {
  let timestamp;
  const measurements = {
    frame: {
      accTime: 0,
      accSnapshots: 0,
      min: 0,
      max: 0,
      current: 0,
      average: 0,
    },
  };
  return {
    ...target,
    measure(id) {
      if (id === 'layout-start') {
        timestamp = Date.now();
      } else if (id === 'draw-end' && timestamp) {
        const now = Date.now();
        measurements.frame.current = now - timestamp;
        measurements.frame.accTime += measurements.frame.current;
        measurements.frame.accSnapshots++;
        measurements.frame.min = Math.min(
          measurements.frame.min || Number.MAX_VALUE,
          measurements.frame.current
        );
        measurements.frame.max = Math.max(
          measurements.frame.max,
          measurements.frame.current
        );
        measurements.frame.average = Math.floor(
          measurements.frame.accTime / measurements.frame.accSnapshots
        );
        send({ measurements });
      }
    },
  };
}
