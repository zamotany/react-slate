/* @flow */

const onExitCallbacks = [];

function execExitCallbacks(...args) {
  onExitCallbacks.forEach(cb => cb(...args));
}

// eslint-disable-next-line
export function onExit(cb: Function) {
  onExitCallbacks.push(callOnce(cb));

  process.on('exit', execExitCallbacks);
  process.on('SIGINT', execExitCallbacks);
  process.on('uncaughtException', execExitCallbacks);
}

export function callOnce(cb: Function) {
  let called = false;
  return (...args: any[]) => {
    if (!called) {
      called = true;
      cb(...args);
    }
  };
}
