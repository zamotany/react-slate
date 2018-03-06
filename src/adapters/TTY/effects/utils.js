/* @flow */

const onExitCallbacks = [];

// eslint-disable-next-line
export function onExit(cb: Function) {
  const exitCb = callOnce(cb);
  onExitCallbacks.push(exitCb);
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

export function exit(code?: number = 0) {
  onExitCallbacks.forEach(cb => cb(code));
  // $FlowFixMe
  process.exit(code);
}
