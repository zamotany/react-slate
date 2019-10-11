# renderFullscreen

#### Definition:

```ts
renderFullscreen(
  element: JSX.Element,
): void
```

#### Description:

Render app in fullscreen mode to a terminal's alternate screen buffer using process standard output (`STD`). Apps rendered to alterante screen buffer will take all available window space.

By default the rendered content will be styled with colors and modifiers. You can disable this behavior by passing [`NO_COLOR`](https://no-color.org/) environment variable.

#### Arguments:

| Name      | Type          | Optional | Default value | Description                 |
| --------- | ------------- | :------: | ------------- | --------------------------- |
| `element` | `JSX.Element` |    No    | -             | Root JSX element to render. |

#### Example:

```jsx
import {renderFullscreen, Text} from '@react-slate/core';

const App = () => <Text>Hello</Text>;

renderFullscreen(<App />);
```
