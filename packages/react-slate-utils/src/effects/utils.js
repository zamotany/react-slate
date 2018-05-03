/* @flow */

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
