---
id: spinner-component
title: Spinner
sidebar_label: Spinner
---

Controlled spinner component based on [`cli-spinners`](https://github.com/sindresorhus/cli-spinners).

## Props

* `type?: string` - [`cli-spinners`](https://github.com/sindresorhus/cli-spinners)'s type (default: `dots`).
* `interval?: number` - Interval between rendering next spinner frames (default value is taken from [`cli-spinners`](https://github.com/sindresorhus/cli-spinners) per animation).
* `frames?: string[]` - Custom animation frames.
* `style?: Style` - Object with [Style properties](./style-prop.md)

## Example

```js
import React from 'react';
import { Spinner, View } from 'react-slate';

class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <Spinner />
        <Spinner type="line" />
        <Spinner interval={250} />
        <Spinner interval={80} frames={['-', '|', '_', '|']} />
      </View>
    );
  }
}
```
