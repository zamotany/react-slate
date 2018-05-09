---
id: utils-getting-started
title: @react-slate/utils: Getting started
sidebar_label: Getting started
---

Utility functions for altering and enhancing terminal apps.

## Installation

```bash
yarn add @react-slate/core @react-slate/utils
```

## API

### `hideCursor(stream: tty$WritableStream): void`

Hides cursor.

Contains side effects!

### Example

```js
import { hideCursor } from '@react-slate/utils';

hideCursor(process.stdout);
```

### `clearOnExit(stream: tty$WritableStream, shouldClearScrollback: boolean = false): void`

Clear screen or scrollback (if `shouldClearScrollback` is `true`) when process is about to exit.

Contains side effects!

### Example

```js
import { clearOnExit } from '@react-slate/utils';

clearOnExit(process.stdout, true);
```

### `clearOnError(stream: tty$WritableStream): void`

Clear screen (scrollback will be untouched) when process is about to exit due to an error.

Contains side effects!

### Example

```js
import { clearOnError } from '@react-slate/utils';

clearOnError(process.stdout);
```

### `overwriteConsole(options: OverwriteConsoleOptions): void`

Redirect console output to specified streams or files.

Contains side effects!

### Arguments

`options: OverwriteConsoleOptions`:

* `exitOnWarning: boolean` - Exit on first call to `console.warning`.
* `exitOnError: boolean` - Exit on first call to `console.error`.
* `outStream: boolean | string | NodeWritableStream` - Redirect console output to:
  * `stdout.log` if `true`
  * custom file if `string` with path is supplied
  * custom Node stream if writable node stream is supplied
* `errStream: boolean | string | NodeWritableStream` - Redirect console error output to:
  * `stderr.log` if `true`
  * custom file if `string` with path is supplied
  * custom Node stream if writable node stream is supplied

### Example

```js
import path from 'path';
import { overwriteConsole } from '@react-slate/utils';

overwriteConsole({
  outStream: path.join(process.cwd(), 'node_modules/.atrifacts/stdout.log'),
  errStream: true,
});
```
