/* @flow */

import type { Target } from '@react-slate/core';

export default function withRemoteProfiler(
  target: Target,
  send: (string | Object) => void
) {
  let layoutTimestamp;
  let renderTimestamp;
  let drawTimestamp;
  const internal = {
    frame: {
      accTime: 0,
      accSnapshots: 0,
      accLayoutTime: 0,
      accLayoutSnapshots: 0,
      accRenderTime: 0,
      accRenderSnapshots: 0,
      accDrawTime: 0,
      accDrawSnapshots: 0,
    },
  };
  const measurements = {
    frame: {
      min: 0,
      max: 0,
      current: 0,
      currentLayoutShare: 0,
      currentRenderShare: 0,
      currentDrawShare: 0,
      layoutTimestamp: 0,
      renderTimestamp: 0,
      drawTimestamp: 0,
      endTimestamp: 0,
      average: 0,
      averageLayoutShare: 0,
      averageRenderShare: 0,
      averageDrawShare: 0,
    },
  };
  return {
    ...target,
    measure(id) {
      if (id === 'layout-start') {
        layoutTimestamp = Date.now();
      } else if (id === 'render-start') {
        renderTimestamp = Date.now();
      } else if (id === 'draw-start') {
        drawTimestamp = Date.now();
      } else if (id === 'draw-end' && layoutTimestamp) {
        const now = Date.now();
        const totalDiff = now - layoutTimestamp;
        measurements.frame.current = totalDiff;
        internal.frame.accTime += measurements.frame.current;
        internal.frame.accSnapshots++;
        measurements.frame.min = Math.min(
          measurements.frame.min || Number.MAX_VALUE,
          measurements.frame.current
        );
        measurements.frame.max = Math.max(
          measurements.frame.max,
          measurements.frame.current
        );
        measurements.frame.average = Math.floor(
          internal.frame.accTime / internal.frame.accSnapshots
        );
        measurements.frame.currentLayoutShare =
          (renderTimestamp - layoutTimestamp) / totalDiff;
        measurements.frame.currentRenderShare =
          (drawTimestamp - renderTimestamp) / totalDiff;
        measurements.frame.currentDrawShare = (now - drawTimestamp) / totalDiff;
        measurements.frame.layoutTimestamp = layoutTimestamp;
        measurements.frame.renderTimestamp = renderTimestamp;
        measurements.frame.drawTimestamp = drawTimestamp;
        measurements.frame.endTimestamp = now;
        internal.frame.accLayoutTime += measurements.frame.currentLayoutShare;
        internal.frame.accLayoutSnapshots++;
        measurements.frame.averageLayoutShare =
          internal.frame.accLayoutTime / internal.frame.accLayoutSnapshots;
        internal.frame.accRenderTime += measurements.frame.currentRenderShare;
        internal.frame.accRenderSnapshots++;
        measurements.frame.averageRenderShare =
          internal.frame.accRenderTime / internal.frame.accRenderSnapshots;
        internal.frame.accDrawTime += measurements.frame.currentDrawShare;
        internal.frame.accDrawSnapshots++;
        measurements.frame.averageDrawShare =
          internal.frame.accDrawTime / internal.frame.accDrawSnapshots;
        send({
          measurements,
        });
      }
    },
  };
}
