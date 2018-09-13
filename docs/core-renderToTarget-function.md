---
id: core-renderToTarget-function
title: renderToTarget
sidebar_label: renderToTarget
---

```js
renderToTarget(element: React.Element, target: Target, callback: ?Function = null): void
```

Renders an React element to a custom target.

### Arguments

- `element: React.Element` - Element to render.
- `target: Target` - Custom target providing value and implementation for the following properties/functions:

  - `forceFullPrint: boolean` - Switches to rendering full content of the canvas instead of drawing only damaged lines.
  - `print(data: string): void` - Prints rendered content. This is the place to flush content to the host environment.
  - `getSize(): { width: number, height: number }` - Provides width and height of the canvas on which the content will be rendered (use `-1` to make the canvas auto-resizable).
  - `setCursorPosition(x: number, y: number): void` - Moves cursor to specific coordinates (can be noop'ed).
  - `clear(fullScreen: boolean): void` - For `fullScreen: true` it should clear the content below the cursor position, which will be set before using `setCursorPosition`, otherwise it should clear current the line (can be noop'ed).
  - `measure(id: string): void` - Hook for measuring time it took to perform various tasks (usually it should be noop'ed).

- `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { WebSocket } from 'ws';
import { renderToTarget, View } from '@react-slate/core';

const NOOP = () => {};
const ws = new WebSocket(someAddress);

ws.addEventListener('open', () => {
  const target = {
    forceFullPrint: true,
    setCursorPosition: NOOP,
    clear: NOOP,
    print(data: string) {
      ws.send(data);
    },
    getSize() {
      return {
        width: -1,
        height: -1,
      };
    },
  };

  renderToTarget(<View>Hello World</View>, target);
});
```
