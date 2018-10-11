/* @flow */

import type EventEmitter from 'events';
import type { Target } from '@react-slate/core';

function batch(fn: Function, timeout: number) {
  let queue = [];
  let timestamp;
  let deferred;
  return (...args) => {
    queue.push(args);
    if (Date.now() - timeout < timestamp) {
      clearTimeout(deferred);
      deferred = setTimeout(() => {
        fn(queue);
        queue = [];
      }, timeout);
    }
    timestamp = Date.now();
  };
}

export default function captureLogs(emitter: EventEmitter) {
  return (target: Target, send: (string | Object) => void) => {
    emitter.on(
      'log',
      batch(logs => {
        send({ logs });
      }, 20)
    );
    return target;
  };
}
