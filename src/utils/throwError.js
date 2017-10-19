/* @flow */

import chalk from 'chalk';

export default function throwError(description: string, componentName: string) {
  const message = `Error: ${description}\n    in ${componentName}`;
  if (console.error.raw) {
    console.error.raw(chalk.red(message));
  } else {
    console.error(message);
  }
  throw new Error(message);
}
