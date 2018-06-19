---
id: interactive-scroll-view
title: ScrollView 
sidebar_label: ScrollView
---

Render `children` elements in a scrollable container with fixed height, using mouse scroll events. Useful for reporters and logs display.

## Props

* `children: React.Element<*>` - Content to be rendered and scrolled.
* `height: number` - Fixed height of the visible area.
* `inputStream: tty$ReadStream` (default: `process.stdin`) - Input stream to capture scroll events from.
* `outputStream: tty$WriteStream` (default: `process.stdout`) - Output stream to enable/disable mouse reporting, hence toggling scroll events.
* `reportingRatio: number` (default: `0.25`) - Mouse scrolling reporting ratio, effectively controlling the speed of scroll.
* `inverted?: boolean` - Inverts the direction of scrolling.
* `style?: Style` - Object with [Style properties](./core-style-prop.md).
* `follow?: boolean`, - Makes `ScrollView` follow new content added at the bottom.
* `disabled?: boolean` - Disables scrolling when set to `true`.

## Example

```js
import React from 'react';
import { ScrollView } from '@react-slate/interactive';

class MyComponent extends React.Component {
  render() {
    return (
      <ScrollView height={2} style={{ border: 'solid red' }}>
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
