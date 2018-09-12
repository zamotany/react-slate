---
id: core-renderToTerminal-function
title: renderToTerminal
sidebar_label: renderToTerminal
---

```js
renderToTerminal(
  element: React.Element,
  stream: tty$WritableStream | stream$Writable,
  options?: Options = {}
  callback?: ?Function = null
): void
```

Renders an React element to a TTY stream (Terminal, usually `process.stdout` or `process.stderr`) or non-TTY stream with fixed-size canvas.

### Arguments

* `element: React.Element` - Element to render.
* `stream: tty$WritableStream` - TTY stream to render to.
* `options: Options` - Options to specify canvas size if passed stream is non-TTY:
  * `width?: number = 40` - Width of canvas.
  * `height?: number = 20` - Size of canvas.
  * `devtools?: boolean = false` - Specifies if devtools should be used (they must be installed manually: `yarn add -D @react-slate/devtools`).
* `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { renderToTerminal, View } from '@react-slate/core';

renderToTerminal(<View>Hello World</View>, process.stdout);
```
