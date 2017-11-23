/* @flow */

import chalk from 'chalk';

export function throwComponentError(
  description: string,
  componentName: string
) {
  const message = `Error: ${description}\n    in ${componentName}`;
  if (console.error.raw) {
    console.error.raw(chalk.red(message));
  } else {
    console.error(message);
  }
  throw new Error(message);
}

export function throwError(error: Error) {
  if (console.error.raw) {
    console.error.raw(chalk.red(error.stack));
  } else {
    console.error(error.stack);
  }
  throw error;
}
