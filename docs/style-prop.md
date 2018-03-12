---
id: style-prop
title: Style prop (reference)
sidebar_label: Style prop (reference)
---

Use [Styling page](./styling.md) for full documentation on each of the properties.

```js
type Style = {|
  color?: string, // eg: `blue`, `rgb(255, 124, 77)`, `#ffffff`
  backgroundColor?: string, // eg: `blue`, `rgb(255, 124, 77)`, `#ffffff`
  fontWeight?: 'bold' | 'normal',
  fontStyle?: 'italic' | 'normal',
  textDecoration?: 'underline' | 'line-through' | 'normal',
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase',
  visibility?: 'visible' | 'hidden',
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
  height?: number,
  width?: number,
  display?: 'block' | 'inline',
  border?: string,
  borderStyle?: 'none' | 'solid' | 'double',
  borderColor?: string,
  textAlign?: 'left' | 'center' | 'right',
  zIndex?: number, // supports both  negative, 0 and positive values
  position?: 'relative' | 'fixed',
  left?: number,
  top?: number,
|};
```
