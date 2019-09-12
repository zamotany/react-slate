# render

#### Syntax:

```js
render(
  element: JSX.Element,
): void
```

#### Description:

Render app to a terminal using process standard output (`STD`).

By default the rendered content will be styled with colors and modifiers. You can disable this behavior by passing [`NO_COLOR`](https://no-color.org/) environment variable.

#### Arguments:

| Name      | Type          | Optional | Default value | Description                 |
| --------- | ------------- | :------: | ------------- | --------------------------- |
| `element` | `JSX.Element` |    No    | -             | Root JSX element to render. |

#### Example:

```js
import { render, Text } from '@react-slate/core';

const App = () => <Text>Hello</Text>;

render(<App />)
```
