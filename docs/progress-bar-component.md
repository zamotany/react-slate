---
id: progress-bar-component
title: ProgressBar
sidebar_label: ProgressBar
---

Uncontrolled component rendering a progress bar.

## Props

* `value: number` - Progress value normalized between 0 and 1 (**values above 1 will be treated as 1**).
* `barWidth: number` - Width of progress bar including `open` and `close` characters.
* `chars?: Chars` - Characters and their styling to use when rendering progress bar.

  ```js
  type CharProps = {
    char?: string,
    style?: Style,
  };

  type Chars = {
    open?: CharProps, // default char: '['
    close?: CharProps, // default char: ']'
    bar?: CharProps, // default char: '='
    fill?: CharProps, // default char: ' '
  };
  ```

* `style?: Style` - Object with [Style properties](./style-prop)

## Example

```js
import React from 'react';
import { ProgressBar, View } from 'react-slate';

class MyComponent extends React.Component {
  render() {
    return (
      <View>
        <ProgressBar
          value={0.4}
          barWidth={40}
          chars={{
            bar: { char: '#' },
            fill: { char: '-' },
            open: { style: { color: 'blue' } },
            close: { style: { color: 'blue' } },
          }}
        />
        {' Some progress'}
      </View>
    );
  }
}
```
