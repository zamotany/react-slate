---
id: installation
title: Installation
sidebar_label: Installation
---

`react-stream-renderer` is a custom React renderer, not it's re-implementation, so the first thing is to install necessary dependencies:

```bash
yarn add react react-stream-reconciler
```

Now, in your entry file import [`render` function](./render-function.md) and appropriate adapter for your use case:

* for terminal apps (CLIs etc) use [`makeTTYAdapter`](./tty-adapter.md)
* for testing on CI use [`makeTestAdapter`](./test-adapter.md)

```js
import React from 'react';
import { render, makeTTYAdapter, View, Text } from 'react-stream-renderer';

render(
  <View style={{ margin: '1' }}>
    <Text style={{ color: 'ansi-green' }}>Hello world!</Text>
  </View>,
  makeTTYAdapter(process.stdout).makeEffects()
);
```

Now when you run your app, you should see:

![Preview](/react-stream-renderer/img/preview.png)

Please refer to [Babel](http://babeljs.io/) or [Typescript](https://www.typescriptlang.org/) documentation on how to setup your project to transpile JSX.
