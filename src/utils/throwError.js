/* @flow */

import chalk from 'chalk';

let _hasThrown = false;

export function hasThrown() {
  return _hasThrown;
}

export function throwComponentError(
  description: string,
  componentName: string
) {
  _hasThrown = true;
  const message = `Error: ${description}\n    in ${componentName}`;
  if (console.error.raw) {
    console.error.raw(chalk.red(message));
  } else {
    console.error(message);
  }
  throw new Error(message);
}

export function throwError(error: Error, forceThrow: boolean = false) {
  _hasThrown = true;
  if (console.error.raw) {
    console.error.raw(chalk.red(error.stack));
  } else {
    console.error(error.stack);
  }
  if (forceThrow) {
    throw error;
  }
}
