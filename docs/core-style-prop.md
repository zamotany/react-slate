---
id: core-style-prop
title: Style prop (reference)
sidebar_label: Style prop (reference)
---

Use [Styling page](./core-styling.md) for full documentation on each of the properties.

```js
type Style = {|
  color?: string, // eg: `blue`, `rgb(255, 124, 77)`, `#ffffff` or `initial`
  backgroundColor?: string, // eg: `blue`, `rgb(255, 124, 77)`, `#ffffff` or `initial`
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  margin?: string, // <top> <right> <bottom> <left> eg: `2 1 0 3`, `1 2 3`, `2 1`, `1`
  marginTop?: number,
  marginBottom?: number,
  marginLeft?: number,
  marginRight?: number,
  padding?: string, // <top> <right> <bottom> <left> eg: `2 1 0 3`, `1 2 3`, `2 1`, `1`
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
  border?: string,
  borderStyle?: 'none' | 'solid' | 'double',
  borderColor?: string,
  borderBackgroundColor?: string,
  height?: number,
  width?: number,
  display?: 'block' | 'inline',
  zIndex?: number, // supports both  negative, 0 and positive values
  position?: 'relative' | 'absolute',
  left?: number,
  top?: number,
|};
```
