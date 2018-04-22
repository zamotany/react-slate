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

let _hasThrownError = false;
function toggleHasThrownErrorFlag() {
  _hasThrownError = true;
}
process.on('error', toggleHasThrownErrorFlag);
process.on('uncaughtException', toggleHasThrownErrorFlag);
process.on('unhandledRejection', toggleHasThrownErrorFlag);
export function hasThrownError() {
  return _hasThrownError;
}
