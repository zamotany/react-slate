# renderToJson

#### Definition:

```ts
function renderToJson(
  element: JSX.Element,
  options: {
    width?: number;
    height?: number;
    maxRenders?: number;
  } = {}
): {
  snapshot: JsonView | undefined;
  start: () => Iterable<Promise<JsonView | undefined>>;
  stop: () => void;
}
```

#### Description:

Render app to JSON-serializable tree with content, layout and style information for custom processing.

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
import {renderToJson, Text} from '@react-slate/core';

const App = () => <Text>Hello</Text>;

console.log(renderToJson(<App />).snapshot);
// or
(async () => {
  for await (const snapshot of renderToJson(<App />).start()) {
    console.log(snapshot);
  }
})();
```
