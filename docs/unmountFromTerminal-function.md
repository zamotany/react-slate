---
id: unmountFromTerminal-function
title: unmountFromTerminal
sidebar_label: unmountFromTerminal
---

```js
unmountFromTerminal(
  stream: tty$WritableStream | stream$Writable,
): boolean
```

Unmount an app from TTY stream (usually `process.stdout` or `process.stderr`) or non-TTY stream. Returns `true` if the app unmounted from given stream, `false` otherwise, for example if the app was not mounted previously, it won't be unmounted.

### Arguments

* `stream: tty$WritableStream` - TTY stream from which the app will be unmounted.

### Example

```js
import React from 'react';
import { renderToTerminal, View, unmountFromTerminal } from '@react-slate/core';

renderToTerminal(<View>Hello World</View>, process.stdout);
unmountFromTerminal(process.stdout); // => true
unmountFromTerminal(process.stderr); // => false
```
