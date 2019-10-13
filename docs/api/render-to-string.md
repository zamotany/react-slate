# renderToString

#### Definition:

```ts
function renderToString(
  element: JSX.Element,
  options: {
    width?: number;
    height?: number;
    maxRenders?: number;
  } = {}
): {
  snapshot: string | undefined;
  start: () => Iterable<Promise<string | undefined>>;
  stop: () => void;
}
```

#### Description:

Render app to a string for custom processing.

By default the rendered string will include ANSI escape codes for styling. You can disable this behavior by passing [`NO_COLOR`](https://no-color.org/) environment variable.

Use `start` function and `for await` for continuously rendered app - ones that render more than a single frame. Use `stop` function to programatically stop rendering.

#### Arguments:

| Name                 | Type          | Optional | Default value | Description                                          |
| -------------------- | ------------- | :------: | ------------- | ---------------------------------------------------- |
| `element`            | `JSX.Element` |    No    | -             | Root JSX element to render.                          |
| `options.width`      | `number`      |   Yes    | `undefined`   | Predefined width of the canvas.                      |
| `options.height`     | `number`      |   Yes    | `undefined`   | Predefined height of the canvas.                     |
| `options.maxRenders` | `number`      |   Yes    | `undefined`   | Limit for rendered frames, `undefined` is unlimited. |

#### Example:

```jsx
import React from 'react';
import {renderToString, Text} from '@react-slate/core';

const App = () => <Text>Hello</Text>;

console.log(renderToString(<App />).snapshot);
// or
(async () => {
  for await (const snapshot of renderToString(<App />).start()) {
    console.log(snapshot);
  }
})();
```
