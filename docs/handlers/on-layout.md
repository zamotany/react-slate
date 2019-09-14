# onLayout handler

`onLayout` handler is available on both [`Text`](components/text) and [`View`](components/view) components. It's used to get the layout information after the initial layout.

`onLayout` handler is call every time the new layout is calculated, which means that the layout information is available to you after the element was already rendered on the screen.

#### Definition:

```js
onLayout(layout: RectData): void
```

`RectData` consist of the following properties:

```js
type RectData = {
  x: number,
  y: number,
  relativeX: number,
  relativeY: number,
  width: number,
  height: number,
};
```

#### Example:

```js
import React from 'react';
import {View, Text, render} from '@react-slate/core';

const App = () => (
  <View onLayout={layout => console.log('view', layout)}>
    <Text onLayout={layout => console.log('text', layout)}>Hello</Text>
  </View>
);

render(<App />);
```
