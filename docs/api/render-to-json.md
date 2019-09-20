# renderToJson

#### Definition:

```ts
renderToJson(
  element: JSX.Element,
  options: {
    width?: number;
    height?: number;
    maxRenders?: number;
  } = {}
): { snapshot: JsonView | undefined } & Iterable<
  Promise<JsonView | undefined>
>
```

#### Description:

Render app to JSON-serializable tree with content, layout and style information for custom processing.

Use `for await` for continuously rendered app - ones that render more than a single frame.

#### Arguments:

| Name                 | Type          | Optional | Default value | Description                                          |
| -------------------- | ------------- | :------: | ------------- | ---------------------------------------------------- |
| `element`            | `JSX.Element` |    No    | -             | Root JSX element to render.                          |
| `options.width`      | `number`      |   Yes    | `undefined`   | Predefined width of the canvas.                      |
| `options.height`     | `number`      |   Yes    | `undefined`   | Predefined height of the canvas.                     |
| `options.maxRenders` | `number`      |   Yes    | `undefined`   | Limit for rendered frames, `undefined` is unlimited. |

#### Example:

```jsx
import {renderToJson, Text} from '@react-slate/core';

const App = () => <Text>Hello</Text>;

console.log(renderToJson(<App />).snapshot);
// or
(async () => {
  for await (const snapshot of renderToJson(<App />)) {
    console.log(snapshot);
  }
})();
```
