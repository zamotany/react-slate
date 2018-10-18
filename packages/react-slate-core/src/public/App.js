/* @flow */

const onExitListeners = [[], [], [], []];
const onErrorListeners = [[], [], [], []];

function execOnExitListeners() {
  onExitListeners.forEach((listeners, priority) => {
    listeners.forEach(listener => listener());
    onExitListeners[priority] = [];
  });
}

function execOnErrorListeners(error?: Error) {
  onErrorListeners.forEach((listeners, priority) => {
    listeners.forEach((listener: (error?: Error) => void) => listener(error));
    onErrorListeners[priority] = [];
  });
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

const Priority = {
  Critical: 3,
  High: 2,
  Normal: 1,
  Low: 0,
};

function validatePriority(priority?: number) {
  if (
    typeof priority === 'number' &&
    (priority < Priority.Low || priority > Priority.Critical)
  ) {
    throw new Error();
  }
}

function removeListener(listeners, listener, priority) {
  if (typeof priority === 'number') {
    const index = listeners.indexOf(listener);
    if (index >= 0) {
      listeners.splice(index, 1);
    }
  } else {
    onErrorListeners.forEach(_listeners => {
      const index = _listeners.indexOf(listener);
      if (index >= 0) {
        _listeners.splice(index, 1);
      }
    });
  }
}

export default {
  Priority,
  get exitCode() {
    return process.exitCode;
  },
  set exitCode(code: number) {
    process.exitCode = code;
  },
  exit(code: number = 0) {
    process.exit(code);
  },
  onExit(listener: () => void, priority: number = Priority.Normal) {
    validatePriority(priority);
    if (onExitListeners[priority].indexOf(listener) === -1) {
      onExitListeners[priority].push(listener);
    }
  },
  onError(
    listener: (error?: Error) => void,
    priority: number = Priority.Normal
  ) {
    validatePriority(priority);
    if (onErrorListeners[priority].indexOf(listener) === -1) {
      onErrorListeners[priority].push(listener);
    }
  },
  removeOnExit(listener: () => void, priority?: number) {
    validatePriority(priority);
    removeListener(onExitListeners, listener, priority);
  },
  removeOnError(listener: (error?: Error) => void, priority?: number) {
    validatePriority(priority);
    removeListener(onErrorListeners, listener, priority);
  },
};
