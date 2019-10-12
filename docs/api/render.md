# render

#### Definition:

```ts
function render(
  element: JSX.Element,
): { renderStatic: RenderStatic }
```

#### Description:

Render app to the terminal's main buffer using standard output (`STD`). Apps rendered using `render` can have varying height. If the content is longer than available space, the native terminal's scrolling handling is used.

`render` function returns an object with [`renderStatic`](api/render-static) function, which you can use to render __static content__ (that cannot be later changed) __above the content produced by `element`__ parameter. To use [`renderStatic`](api/render-static) in your components, use [`withRenderStatic`](api/with-render-static) HoC or [`useRenderStatic`](api/use-render-static) hook.

By default the rendered content will be styled with colors and modifiers. You can disable this behavior by passing [`NO_COLOR`](https://no-color.org/) environment variable.

#### Arguments:

| Name      | Type          | Optional | Default value | Description                 |
| --------- | ------------- | :------: | ------------- | --------------------------- |
| `element` | `JSX.Element` |    No    | -             | Root JSX element to render. |

#### Example:

```jsx
import React from 'react';
import {render, Text} from '@react-slate/core';

const App = () => <Text>Hello</Text>;

const { renderStatic } = render(<App />);

setTimeout(() => {
  renderStatic(<Text>Will be above the Hello</Text>);
}, 1000);
```
