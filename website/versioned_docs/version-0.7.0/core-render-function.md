---
id: version-0.7.0-core-render-function
title: render
sidebar_label: render
original_id: core-render-function
---

Render given element using a given adapter (for example: `makeTTYAdapter` for TTY streams or `makeTestAdapter` for testing purposes).

### `render(element: React.Element, adapter: BaseAdapter): () => void`

Returns `forceRender` function which triggers full re-render.

## Example

```js
import { render, Text } from '@react-slate/core';

const forceRender = render(
  <Text>Hello World!</Text>,
  makeTTYAdapter(process.stdout).makeEffects()
);

setTimeout(() => {
  forceRender();
}, 1000);
```
