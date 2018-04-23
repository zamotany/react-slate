/* @flow */

import { onExit, callOnce } from './utils';

let callbacks = [];

export function clearCallbacks() {
  callbacks.forEach(({ id, clearFunction }) => {
    global[clearFunction](id);
  });
  callbacks = [];
}

export default callOnce(() => {
  ['Interval', 'Timeout', 'Immediate'].forEach(type => {
    const set = global[`set${type}`];
    const clear = global[`clear${type}`];

    global[`set${type}`] = (...args) => {
      const id = set(...args);
      callbacks.push({
        clearFunction: `clear${type}`,
        id,
      });
      return id;
    };

    global[`clear${type}`] = (...args) => {
      clear(...args);
      callbacks = callbacks.filter(callback => callback.id !== args[0]);
    };
  });

  onExit(clearCallbacks);
});
