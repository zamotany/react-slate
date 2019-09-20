# onWheel handler

> Only available when rendering app with [`render`](api/render) function.

`onWheel` handler is a function called upon receiving mouse wheel event over the element, which has the handler attached.

`onWheel` handler is available on both [`Text`](components/text) and [`View`](components/view) components.

All `onWheel` handlers undergo event bubbling meaning each `onWheel` handler on parent components will be called, unless the children `onWheel` handler returns `true`, which will stop the propagation.

#### Definition:

```ts
onWheel(event: MouseEvent): boolean | void;
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
  direction?: number;
};
```

Please not that **different terminals might report `shift`, `alt` and `ctrl` differently**.

Use `direction` property to detect direction of the wheel movement: `1` for __upward__ anf `-1` for __downward__ movement.

#### Example:

```jsx
import React from 'react';
import {View, Text, render} from '@react-slate/core';

const App = () => (
  <View
    onWheel={evt => {
      throw new Error('should never be called');
    }}
  >
    <Text
      onWheel={evt => {
        console.log('got a mouse wheel', evt.direction === 1 ? 'up' : 'down');
        return true; // stops propagation
      }}
    >
      Hello
    </Text>
  </View>
);

render(<App />);
```
