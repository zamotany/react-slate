---
id: components-scroll-view
title: ScrollView 
sidebar_label: ScrollView
---

Render `children` elements in a scrollable container with fixed height, using mouse scroll events. Useful for reporters and logs display.

In order for `ScrollView` to function properly, it needs to have a fixed height. You can specify it using either `height` prop or a `style` prop with `height` property. Please refer to [Style properties](./core-style-prop.md) for more info.

## Props

* `children: React.Element<*>` - Content to be rendered and scrolled.
* `height?: number` - Fixed height of the visible area.
* `inputStream: tty$ReadStream` (default: `process.stdin`) - Input stream to capture scroll events from.
* `outputStream: tty$WriteStream` (default: `process.stdout`) - Output stream to enable/disable mouse reporting, hence toggling scroll events.
* `scrollSensitivity: number` (default: `0.25`) - Controls sensitivity of scrolling, the higher the value, the more sensitive scrolling is - the content is scrolled at higher rate (faster).
* `inverted?: boolean` - Inverts the direction of scrolling.
* `style?: Style` - Object with [Style properties](./core-style-prop.md).
* `stickToBottom?: boolean` - Makes visible area stick to bottom, so the new content will be always visible.
* `disabled?: boolean` - Disables scrolling when set to `true`.

## Example

```js
import React from 'react';
import { ScrollView } from '@react-slate/components';

class MyComponent extends React.Component {
  render() {
    return (
      <ScrollView style={{ border: 'solid red', height: 2 }}>
        <View>{'Scroll!'}</View>
        <View>{'... yeah ...'}</View>
        <View>{'... you are ...'}</View>
        <View>{'... scrolling ...'}</View>
        <View>{'... awesome, right? ...'}</View>
      </ScrollView>
    );
  }
}
```
