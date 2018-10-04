/* @flow */

let onExitListeners = [];
let onErrorListeners = [];
let onBeforeExitListeners = [];

function execOnExitListeners() {
  onExitListeners.forEach(listener => listener());
  onExitListeners = [];
}

function execOnBeforeExitListeners() {
  onBeforeExitListeners.forEach(listener => listener());
  onBeforeExitListeners = [];
}

function execOnErrorListeners(error?: Error) {
  onErrorListeners.forEach(listener => listener(error || process.exitCode));
  onErrorListeners = [];
}

process.on('beforeExit', () => {
  execOnBeforeExitListeners();
});
process.on('exit', code => {
  if (code === 0) {
    execOnExitListeners();
  } else {
    execOnErrorListeners();
  }
});
process.on('SIGINT', () => {
  execOnBeforeExitListeners();
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
  onBeforeExit(listener: () => void) {
    if (onBeforeExitListeners.indexOf(listener) === -1) {
      onBeforeExitListeners.push(listener);
    }
  },
  onError(listener: (Error | number | void) => void) {
    if (onErrorListeners.indexOf(listener) === -1) {
      onErrorListeners.push(listener);
    }
  },
  removeOnExit(listener: () => void) {
    const index = onExitListeners.indexOf(listener);
    if (index >= 0) {
      onExitListeners.splice(index, 1);
    }
  },
  removeOnBeforeExit(listener: () => void) {
    const index = onBeforeExitListeners.indexOf(listener);
    if (index >= 0) {
      onBeforeExitListeners.splice(index, 1);
    }
  },
  removeOnError(listener: () => void) {
    const index = onErrorListeners.indexOf(listener);
    if (index >= 0) {
      onErrorListeners.splice(index, 1);
    }
  },
};
