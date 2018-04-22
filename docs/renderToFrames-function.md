---
id: renderToFrames-function
title: renderToFrames
sidebar_label: renderToFrames
---

```js
renderToFrames(
  element: React.Element,
  options: Options,
  callback: ?Function = null
): Promise<string[]>
```

Renders an React element to a array of frames.

### Arguments

* `element: React.Element` - Element to render.
* `options: Options`:
  * `count: number = 1` - How many frames to render.
  * `width: number = 40` - Width of the canvas.
  * `height: number = 20` - height of the canvas.
* `callback: ?Function = null` - Optional callback invoked after the element is rendered.

### Example

```js
import React from 'react';
import { renderToFrames, View } from 'react-slate';

(async () => {
  const [frame0, frame1] = await renderToTarget(<View>Hello World</View>, {
    count: 2,
  });
})();
```

### Recipe - testing (Jest)

```js
import React from 'react';
import { renderToFrames, View } from 'react-slate';
import App from './App';

test('renderToFrames should render the same content', async () => {
  const [snapshot] = await renderToTarget(<App />);
  expect(snapshot).toMatchSnapshot();
});
```
