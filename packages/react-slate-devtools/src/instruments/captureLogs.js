/* @flow */

import type EventEmitter from 'events';
import type { Target } from '@react-slate/core';

export default function captureLogs(emitter: EventEmitter) {
  return (target: Target, send: (string | Object) => void) => {
    let queue = [];

    setInterval(() => {
      send({ logs: queue });
      queue = [];
    }, 1000);

    emitter.on('log', log => {
      queue.push(log);
    });
    return target;
  };
}
