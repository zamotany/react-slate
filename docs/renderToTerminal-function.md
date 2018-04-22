---
id: renderToTerminal-function
title: renderToTerminal
sidebar_label: renderToTerminal
---

```js
renderToTerminal(
  element: React.Element,
  stream: tty$WritableStream,
  callback: ?Function = null
): void
```

Renders an React element to a TTY stream (Terminal) - usually `process.stdout` or `process.stderr`.

### Arguments

* `element: React.Element` - Element to render.
* `stream: tty$WritableStream` - TTY stream to render to.
* `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { renderToTerminal, View } from 'react-slate';

renderToTerminal(<View>Hello World</View>, process.stdout);
```
