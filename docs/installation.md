---
id: installation
title: Installation
sidebar_label: Installation
---

`react-slate` is a custom React renderer, not it's re-implementation, so the first thing is to install necessary dependencies:

```bash
yarn add react @react-slate/core
```

Now, in your entry file import [`renderToTerminal` function](./core-renderToTerminal-function.md) or [`renderToString` function](./core-renderToString-function.md):

* for terminal apps (CLIs etc) use [`renderToTerminal` function](./core-renderToTerminal-function.md)
* for testing on CI use [`renderToString` function](./core-renderToString-function.md)

```js
import React from 'react';
import { renderToTerminal, View, Text } from '@react-slate/core';

renderToTerminal(
  <View style={{ margin: '1' }}>
    <Text style={{ color: 'ansi-green' }}>Hello world!</Text>
  </View>,
  process.stdout
);
```

Now when you run your app, you should see:

![Preview](/img/preview.png)

Please refer to [Babel](http://babeljs.io/) or [Typescript](https://www.typescriptlang.org/) documentation on how to setup your project to transpile JSX.
