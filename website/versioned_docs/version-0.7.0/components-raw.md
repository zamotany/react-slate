---
id: version-0.7.0-components-raw
title: Raw
sidebar_label: Raw
original_id: components-raw
---

Allows to render arbitrary multiline strings (with `\n`) with ANSI escape codes.

`Raw` component performs parsing of passed string to a View tree. **This can be computationally expensive** for large strings or large arrays of strings. While parsing, **some unknown ANSI codes might be stripped**.

## Props

* `children: string | string[]` - String or strings with ANSI escape codes.
* `style?: Style` - Object with [Style properties](./core-style-prop.md) for top-level view.

## Example

```js
import React from 'react';
import chalk from 'chalk';
import { Raw } from '@react-slate/components';

class MyComponent extends React.Component {
  render() {
    return (
      <Raw style={{ border: 'solid red', height: 2 }}>
        {chalk.green('Hello World')}
      </Raw>
    );
  }
}
```
