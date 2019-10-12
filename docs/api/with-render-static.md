# withRenderStatic

#### Definition:

```ts
function withRenderStatic<P extends { renderStatic: RenderStatic }>(
  Component: React.ComponentType<P>
): React.ComponentType<Omit<P, 'renderStatic'>> 
```

#### Description:

Higher Order Component for getting [`renderStatic`](api/render-static) function as a prop in your component.

> [`renderStatic`](api/render-static) and `withRenderStatic` are only available when rendering app with [`render`](api/render) function.

#### Example:

```jsx
import React from 'react';
import {render, withRenderStatic, RenderStatic, Text} from '@react-slate/core';

class App extends React.Component<{ renderStatic: RenderStatic }> {
  componentDidMount() {
    setTimeout(() => {
      this.props.renderStatic(<Text>Will be above the Hello</Text>);
    }, 1000);
  }

  render() {
    return <Text>Hello</Text>;
  }
}

const Root = withRenderStatic(App);

render(<Root />);
```
