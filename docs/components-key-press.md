---
id: components-key-press
title: KeyPress
sidebar_label: KeyPress
---

Contentless component for attaching `onPress` callback to `keypress` event.

**This component by itself doesn't render anything, but it can render passed `children`.**

## Props

* `stream: ReadableStream` - (Node) Readable stream to read `keypress` events from.
* `onPress(char: string, key: Key): void` - Callback to attach to `keypress` events.
  ```js
  type Key = {
    name: string,
    ctrl: boolean,
    shift: boolean,
    alt: boolean,
  };
  ```

## Example

```js
import React from 'react';
import { Text, View } from '@react-slate/core';
import { KeyPress } from '@react-slate/components';

class MyComponent extends React.Component {
  _onPress = (char, key) => {
    console.log(char, key);
  };

  render() {
    return (
      <View>
        <KeyPress stream={process.stdin} onPress={this._onPress} />
        <Text>Hello Wolrd!</Text>
      </View>
    );
  }
}
```

Rendering passed children:

```js
import React from 'react';
import { Text } from '@react-slate/core';
import { KeyPress } from '@react-slate/components';

class MyComponent extends React.Component {
  _onPress = (char, key) => {
    console.log(char, key);
  };

  render() {
    return (
      <KeyPress stream={process.stdin} onPress={this._onPress}>
        <Text>Hello Wolrd!</Text>
      </KeyPress>
    );
  }
}
```
