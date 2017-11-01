/* @flow */

import { onExit, callOnce } from './utils';

let callbacks = [];

export default callOnce(() => {
  ['Interval', 'Timeout', 'Immediate'].forEach(type => {
    const set = global[`set${type}`];
    const clear = global[`clear${type}`];

    global[`set${type}`] = (...args) => {
      callbacks.push({
        clearFunction: `clear${type}`,
        id: set(...args),
      });
    };

    Object.defineProperty(global[`set${type}`], 'name', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: 'setTimeoutCustom',
    });

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
});
