---
id: version-0.7.0-core-view-component
title: View
sidebar_label: View
original_id: core-view-component
---

Basic building block. Can render text (strings), arrays and other nested components.
**Rendering multiline strings with `\n` is currently not supported.**

## Props

- `style?: Style` - Object with [Style properties](./core-style-prop.md)

## Example

```js
import React from 'react';
import { View } from '@react-slate/core';

class App extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.title}>Hello world!</View>
        Today is {new Date().toLocaleString()}
      </View>
    );
  }
}

const styles = {
  title: {
    margin: '0 1',
    color: 'green',
  },
};
```
