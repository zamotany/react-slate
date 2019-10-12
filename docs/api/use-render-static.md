# useRenderStatic

#### Definition:

```ts
function useRenderStatic(): RenderStatic
```

#### Description:

React hook for getting [`renderStatic`](api/render-static) function inside function component.

> [`renderStatic`](api/render-static) and `useRenderStatic` are only available when rendering app with [`render`](api/render) function.

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
