/* @flow */

let onExitListeners = [];
let onErrorListeners = [];

function execOnExitListeners() {
  onExitListeners.forEach(listener => listener());
  onExitListeners = [];
}

function execOnErrorListeners(error?: Error) {
  onErrorListeners.forEach(listener => listener(error || process.exitCode));
  onErrorListeners = [];
}

process.on('exit', code => {
  if (code === 0) {
    execOnExitListeners();
  } else {
    execOnErrorListeners();
  }
});
process.on('SIGINT', () => {
  execOnExitListeners();
  process.exit(0);
});
process.on('uncaughtException', error => {
  execOnErrorListeners(error);
  process.exitCode = 1;
});

export default {
  exit(code: number = 0) {
    process.exit(code);
  },
  onExit(listener: () => void) {
    if (onExitListeners.indexOf(listener) === -1) {
      onExitListeners.push(listener);
    }
  },
  onError(listener: (Error | number | void) => void) {
    if (onErrorListeners.indexOf(listener) === -1) {
      onErrorListeners.push(listener);
    }
  },
  removeOnExitListener(listener: () => void) {
    const index = onExitListeners.indexOf(listener);
    if (index >= 0) {
      onExitListeners.splice(index, 1);
    }
  },
  removeOnErrorListener(listener: () => void) {
    const index = onErrorListeners.indexOf(listener);
    if (index >= 0) {
      onErrorListeners.splice(index, 1);
    }
  },
};
