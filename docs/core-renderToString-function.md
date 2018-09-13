---
id: core-renderToString-function
title: renderToString
sidebar_label: renderToString
---

```js
renderToString(
  element: React.Element,
  options?: Options = {},
  callback?: ?Function = null
): string
```

Renders an React element to a string.

If `width` or `height` is set to `-1` the canvas will auto-resize in that axis. For example when setting both `width` and `height` to `-1`, `react-slate` will try to render it on the smallest canvas possible to fit all the elements.

### Arguments

- `element: React.Element` - Element to render.
- `options: Options`:
  - `width?: number = -1` - Width of the canvas.
  - `height?: number = -1` - height of the canvas.
  - `devtools?: boolean = false` - Specifies if devtools should be used (they must be installed manually: `yarn add -D @react-slate/devtools`).
- `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { renderToString, View } from '@react-slate/core';

const snapshot = renderToString(<View>Hello World</View>, {
  width: 20,
  height: 2,
});
```
