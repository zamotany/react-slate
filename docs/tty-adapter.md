---
id: tty-adapter
title: makeTTYAdapter
sidebar_label: makeTTYAdapter
---

Creates an adapter a TTY Node stream, for example: `process.stdout` and `process.stderr`.

### `makeTTYAdapter(ttyStream: NodeTTYStream): TTYAdapter`

Use chainable API from `TTYAdapter` for configuring the behavior.

### `withCustomConsole(options: OverwriteConsoleOptions): TTYAdapter`

Redirect console output to specified streams or files.

This method won't have any effect unless [`makeEffects`](#makeeffects-ttyadapter) is called.

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

### `hideCursor(): TTYAdapter`

Hides cursor.

This method won't have any effect unless [`makeEffects`](#makeeffects-ttyadapter) is called.

### `clearOnExit(shouldClearScrollback: boolean = false): TTYAdapter`

Clear screen or scrollback (if `shouldClearScrollback` is `true`) when process is about to exit.

This method won't have any effect unless [`makeEffects`](#makeeffects-ttyadapter) is called.

### `clearOnError(): TTYAdapter`

Clear screen (scrollback will be untouched) when process is about to exit due to an error.

This method won't have any effect unless [`makeEffects`](#makeeffects-ttyadapter) is called.

### `makeEffects(): TTYAdapter`

Perform accumulated side effects.
**This method must always be called!**

## Example

```js
render(
  <View>Hello world</View>,
  makeTTYAdapter(process.stdout)
    .withCustomConsole({ outStream: true, errStream: true })
    .hideCursor()
    .clearOnExit(true)
    .makeEffects()
);
```
