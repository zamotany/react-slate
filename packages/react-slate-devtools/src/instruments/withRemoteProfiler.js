/* @flow */

import WebSocket from 'ws';
import type { Target } from '@react-slate/core';
import throttle from 'lodash.throttle';

function createLogger() {
  const address = 'ws://localhost:9000';
  let socket;
  const connect = () => {
    try {
      socket = new WebSocket(address);
      socket.onclose = connect;
      socket.onerror = connect;
    } catch (error) {
      setTimeout(() => {
        connect();
      }, 2000);
    }
  };

  connect();

  return (message: string) => {
    try {
      socket && socket.send(JSON.stringify(message));
    } catch (error) {
      socket = null;
      connect();
    }
  };
}

export default function withRemoteProfiler(target: Target) {
  const log = throttle(createLogger(), 60);
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
    raiseError(error: Error) {
      log(`ERROR ${error.toString()}`);
      target.raiseError(error);
    },
    measure(id) {
      if (id === 'layout-start') {
        timestamp = Date.now();
      } else if (id === 'draw-end' && timestamp) {
        const now = Date.now();
        measurements.frame.current = now - timestamp;
        timestamp = now;
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
        log(measurements);
      }
    },
  };
}
