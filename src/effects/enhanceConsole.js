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

  console.warn = (...args) => {
    logWarning(chalk.yellow(...args));
    if (exitOnWarning) {
      process.exit(1);
    }
  };

  console.warn.raw = logWarning;

  console.error = (...args) => {
    logError(chalk.red(...args));
    if (exitOnError) {
      process.exit(1);
    }
  };

  console.error.raw = logError;
}
