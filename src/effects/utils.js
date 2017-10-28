/* @flow */

// eslint-disable-next-line
export function onExit(cb: Function) {
  process.on('exit', cb);
  process.on('SIGINT', cb);
  process.on('uncaughtException', cb);
}
