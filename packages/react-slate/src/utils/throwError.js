/* @flow */

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
  console.error(message);
  process.exit(1);
}

export function throwError(error: Error) {
  _hasThrown = true;
  console.error(error);
  process.exit(1);
}
