---
id: overwriteConsole-function
title: overwriteConsole
sidebar_label: overwriteConsole
---

```js
overwriteConsole(options: OverwriteConsoleOptions): void
```

Redirect console output to specified streams or files.

### Notes

* Contains side effects!
* Available in `react-slate-utils` package.

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
import { overwriteConsole } from 'react-slate-utils';

overwriteConsole({
  outStream: path.join(process.cwd(), 'node_modules/.atrifacts/stdout.log'),
  errStream: true,
});
```
