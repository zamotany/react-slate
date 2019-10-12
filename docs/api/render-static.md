# renderStatic

#### Definition:

```ts
function renderStatic(
  staticElement: JSX.Element,
): void
```

#### Description:

Render static conent (that cannot be changed later) when using [`render`](api/render) function. Static content will be rendered above the main/dynamic content from [`render`](api/render) function.

Use [`withRenderStatic`](api/with-render-static) HoC or [`useRenderStatic`](api/use-render-static) hook to get this function inside your component.

> `renderStatic` is only available when rendering app with [`render`](api/render) function.

#### Arguments:

| Name            | Type          | Optional | Default value | Description                         |
| --------------- | ------------- | :------: | ------------- | ----------------------------------- |
| `staticElement` | `JSX.Element` |    No    | -             | JSX root element of static content. |

#### Example:

```jsx
import React from 'react';
import {render, useRenderStatic, Text} from '@react-slate/core';

const App = () => {
  const renderStatic = useRenderStatic();

  React.useEffect(() => {
    setTimeout(() => {
      renderStatic(<Text>Will be above the Hello</Text>);
    }, 1000);
  }, [renderStatic]);

  return <Text>Hello</Text>;
};

render(<App />);
```
