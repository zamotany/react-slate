/* @flow */

// eslint-disable-next-line
export function onExit(cb: Function) {
  const exitCb = callOnce(cb);
  process.on('exit', exitCb);
  process.on('SIGINT', exitCb);
  process.on('uncaughtException', exitCb);
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
