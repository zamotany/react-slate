/* @flow */

import chalk from 'chalk';

type Arguments = {
  exitOnWarning: boolean,
  exitOnError: boolean,
};

export default function enhanceConsole({
  exitOnWarning,
  exitOnError,
}: Arguments) {
  const logWarning = console.error.bind(console);
  const logError = console.error.bind(console);

  // $FlowFixMe
  console.warn = (...args) => {
    logWarning(chalk.yellow(...args));
    if (exitOnWarning) {
      process.exit(1);
    }
  };

  // $FlowFixMe
  console.warn.raw = logWarning;

  // $FlowFixMe
  console.error = (...args) => {
    logError(chalk.red(...args));
    if (exitOnError) {
      process.exit(1);
    }
  };

  // $FlowFixMe
  console.error.raw = logError;
}
