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

### Arguments

* `element: React.Element` - Element to render.
* `options: Options`:
  * `width?: number = 40` - Width of the canvas.
  * `height?: number = 20` - height of the canvas.
  * `devtools?: boolean = false` - Specifies if devtools should be used (they must be installed manually: `yarn add -D @react-slate/devtools`).
* `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { renderToString, View } from '@react-slate/core';

const snapshot = renderToString(<View>Hello World</View>, {
  width: 20,
  height: 2,
});
```
