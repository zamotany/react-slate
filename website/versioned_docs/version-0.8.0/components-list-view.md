---
id: version-0.8.0-components-list-view
title: ListView
sidebar_label: ListView
original_id: components-list-view
---

Render a scrollable list of items using the same fixed-height component. Works similarity to [React Native's FlatList](https://facebook.github.io/react-native/docs/flatlist).

`ListView` compared to `ScrollView` focuses on performance since, it only renders visible items. On initial render it calculates the height of first element and uses that value for all items.

__A component used for rendering item (`renderItem` prop) must always have the same height__.

## Props

* `listHeight: number` - Fixed height of the visible area.
* `data: Array<T>` - Items to render.
* `renderItem: ({ item: T, index: number }) => React.Element<*>` - Render prop to render each item, __must always render element with the same height for each item__.
* `keyExtractor: ({ item: T, index: number }) => string` - Function to extract unique key for each element.
* `inverted?: boolean` - Inverts the direction of scrolling.
* `stickToBottom?: boolean` - Makes visible area stick to bottom, so the new content will be always visible.
* `disabled?: boolean` - Disables scrolling when set to `true`.
* `EmptyList?: React.ComponentType<*>` - Component to render if the list is empty.
* `Footer?: React.ComponentType<*>` - Footer component.
* `Header?: React.ComponentType<*>` - Header component.
* `style?: Style` - [Style properties](./core-style-prop.md) for container view with `Header`, list and `Footer`.
* `listStyle?: Style` - [Style properties](./core-style-prop.md) for list-enclosing view.
* `inputStream: tty$ReadStream` (default: `process.stdin`) - Input stream to capture scroll events from.
* `outputStream: tty$WriteStream` (default: `process.stdout`) - Output stream to enable/disable mouse reporting, hence toggling scroll events.
* `scrollSensitivity: number` (default: `0.25`) - Controls sensitivity of scrolling, the higher the value, the more sensitive scrolling is - the content is scrolled at higher rate (faster).
* `accelerationEnabled?: boolean` - TODO.
* `accelerationConfig: { modifier: number, diff: number }` - TODO.

## Example

```js
import React from 'react';
import { View } from '@react-slate/core';
import { ListView } from '@react-slate/components';

class MyComponent extends React.Component {
  render() {
    return (
      <ListView
        listHeight={2}
        data={[1, 2, 3, 4]}
        keyExtractor={({ item }) => item}
        renderItem={({ item }) => (
          <View>
            Hello {item}
          </View>
        )}
        Header={() => (
          <View style={{ marginBottom: 1 }}>My awesome list</View>
        )}
      />
    );
  }
}
```
