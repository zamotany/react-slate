/* @flow */

import { onExit } from './utils';

let callbacks = [];

export default function clearCallbacksOnExit() {
  ['Interval', 'Timeout'].forEach(type => {
    const set = global[`set${type}`];
    const clear = global[`clear${type}`];

    global[`set${type}`] = (...args) => {
      callbacks.push({
        clearFunction: `clear${type}`,
        id: set(...args),
      });
    };

    global[`clear${type}`] = (...args) => {
      clear(...args);
      callbacks = callbacks.filter(callback => callback.id !== args[0]);
    };
  });

  onExit(() => {
    callbacks.forEach(({ id, clearFunction }) => {
      global[clearFunction](id);
    });
    callbacks = [];
  });
}
