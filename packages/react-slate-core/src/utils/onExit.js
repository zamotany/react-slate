/* @flow */

const onExitCallbacks = [];

function execExitCallbacks(...args) {
  onExitCallbacks.forEach(cb => cb(...args));
  const [codeOrError = 0] = args || [];

  // Log error
  if (typeof codeOrError !== 'number') {
    console.error(codeOrError);
  }

  process.exit(typeof codeOrError === 'number' ? codeOrError : 1);
}

// eslint-disable-next-line
export default function onExit(cb: Function) {
  onExitCallbacks.push(callOnce(cb));

  process.on('exit', execExitCallbacks);
  process.on('SIGINT', () => execExitCallbacks(0));
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
