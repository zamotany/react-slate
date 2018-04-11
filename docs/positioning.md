---
id: positioning
title: Positioning
sidebar_label: Positioning
---

`react-slate` comes with custom CSS-like layout system to allow to create a visually appealing CLI React apps.

Below you can find all of the supported layout properties and theirs description. For a guide on how to style elements, please refer to [Styling guide](./styling.md). All of the properties should be passed to a `style` prop:

```js
<View style={{ /* properties here */ }}>Hello</View>
<Text style={{ /* properties here */ }}>World</Text>
```

### `display: 'block' | 'inline'`

Determines whether the element should be positioned in the next row (`block`) or in the same row (`inline`). By default [`View`](./view-component.md) and [`Text`](./text-component.md) component have `display` set to `block`.

* If preceeding element is `block` and the following is `block`, each of them will be layed out in separate row:

  ```js
  <View>First row</View>
  <View>Second row</View>
  ```

* If preceeding element is `block` and the following is `inline`, both of them will be layed out in the same row:

  ```js
  <View>First row</View>
  <View style={{ display: 'inline' }}>Also first row</View>
  ```

  Strings are also `inline` elements:

  ```js
  <View>First row</View>;
  {
    ('Also first row');
  }
  ```

* If preceeding element is `inline` and the following is `block`, each of them will be layed out in separate row:

  ```js
  {
    ('First row');
  }
  <Text>Second row</Text>;
  ```

### `height: number`

Specifies fixed height of a element. If the content takes less rows than `height`, the remaining rows will be filled with empty lines. If the content takes more rows, it will be bottom-trimmed.

### `width: number`

Specifies fixed width of a element. If the content takes less columns than `width`, the remaining columns will be filled with spaces. If the content takes more columns, it will be right-trimmed.

### `textAlign: 'left' | 'center' | 'right'`

Aligns text to the specified edge (`left`/`right`) or centers it (`center`).

### `position: 'relative' | 'fixed'`

Specifies whether the element should be layed out relatively to other elements (`relative`) or if it should be positioned based on top-left corner (`fixed`). By default all elements have `position` set to `relative`. If element is `fixed` it should have [`left`](#left-number) and [`top`](#top-number) properties specified also.

```js
<View>Hello World!</View>
<View style={{ position: 'fixed', left: 0, top: 0 }}>Will override</View>
```

### `zIndex: number`

Specifies at which layer a [`fixed`](#position-relative-fixed) element should be rendered. The higher the value, the more precedence it has - for example, element with `zIndex: 2` will override element with `zIndex` less than `2` (eg: `1`, `0`, `-1` etc) as long as they are overlapping.

Supports `positive` and `negative` values including `0`.

**Elements with negative values will be overridden with [`relative`](#position-relative-fixed) elements, if they are overlapping.**

### `left: number`

Specifies the left offset of a [`fixed`](#position-relative-fixed) element from the left edge of the canvas.

### `top: number`

Specifies the top offset of a [`fixed`](#position-relative-fixed) element from the top edge of the canvas.
