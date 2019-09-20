# onClick handler

> Only available when rendering app with [`render`](api/render) function.

`onClick` handler is a function called upon receiving mouse click event over the element, which has the handler attached.

`onClick` handler is available on both [`Text`](components/text) and [`View`](components/view) components.

All `onClick` handlers undergo event bubbling meaning each `onClick` handler on parent components will be called, unless the children `onClick` handler returns `true`, which will stop the propagation.

#### Definition:

```ts
onClick(event: MouseEvent): boolean | void;
```

`MouseEvent` consist of the following properties:

```ts
type MouseEvent = {
  x: number;
  y: number;
  code: number;
  shift: boolean;
  alt: boolean;
  ctrl: boolean;
  direction?: number; // available only in onWheel handler
};
```

Please not that **different terminals might report `shift`, `alt` and `ctrl` differently**.

#### Example:

```jsx
import React from 'react';
import {View, Text, render} from '@react-slate/core';

const App = () => (
  <View
    onClick={evt => {
      throw new Error('should never be called');
    }}
  >
    <Text
      onClick={evt => {
        console.log('got a click', evt);
        return true; // stops propagation
      }}
    >
      Hello
    </Text>
  </View>
);

render(<App />);
```
