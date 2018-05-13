---
id: core-styling
title: Styling
sidebar_label: Styling
---

`react-slate` comes with custom CSS-like styling system on top on [`chalk`](https://github.com/chalk/chalk). It is using ANSI escape codes for terminals to allow to create a visually appealing CLI React apps.

**This guide is only valid for TTY targets like terminals.**

Below you can find all of the supported styling properties and theirs description. For a guide on how to position elements, please refer to [Positioning guide](./positioning.md). All of the properties should be passed to a `style` prop:

```js
<View style={{ /* my styles here */ }}>Hello</View>
<Text style={{ /* my styles here */ }}>World</Text>
```

You can use also array notation and pass styles as an array. With this approach you can take advance of conditionals style like this:

```js
<View style={[
  { /* my styles here */ },
  { /* my additional styles here */ },
  condition && { /* my conditional styles here */}
]}>Hello</View>
<Text style={{ /* my styles here */ }}>World</Text>
```

### `color: string`

Applies color to a text. It supports color keywords (`blue`), RGB (`rgb(120, 54, 231)`) and HEX (`#ffffff`). Please note that color keywords like `green` are from Truecolor palette. To use colors from 8bit palette (`red`, `green`, `blue`, `yellow`, `magenta`, `cyan`), prefix them with `ansi-`.

```js
<View style={{ color: 'ansi-green' }}>Hello World!</View>
<View style={{ color: 'green' }}>Hello World!</View>
<View style={{ color: 'rgb(255, 0, 0)' }}>Hello World!</View>
<View style={{ color: '#aaaaaa' }}>Hello World!</View>
```

### `backgroundColor: string`

Same as `color`, but applied to a background.

### `fontWeight: 'bold' | 'normal'`

Determines whether the text should be bolded (`bold`) or not (`normal`).

### `fontStyle: 'italic' | 'normal'`

Determines whether the text should be italic (`italic`) or not (`normal`).

### `textDecoration: 'underline' | 'line-through' | 'normal'`

Decorates text with `underline`, `line-through` or nothing (`normal`).

### `textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase'`

Transforms text to `uppercase`, `lowercase`, uppercase the first letter in a word (`capitalize`) or does nothing (`none`).

### `visibility: 'visible' | 'hidden'`

Determines whether the content of a [`View`](./view-component.md) or [`Text`](./text-component.md) component should be `visible` or `hidden`.

### `margin: string`

Add a margin around the content of [`View`](./view-component.md) or [`Text`](./text-component.md) component. **Only 0 and positive values are supported**, negative ones are a NOOP.

**The margin area won't be affected by [`backgroundColor`](#background-color) property.**

Use CSS syntax for applying margin:

* `<top> <right> <bottom> <left>` eg: `2 1 1 0` - adds spaces for `left` and `right` values and new lines for `top` and `bottom` values
* `<top> <right=left> <bottom>` eg: `2 1 3` is equal to `2 1 3 1`
* `<top=bottom> <right=left>` eg: `2 1` is equal to `2 1 2 1`
* `<top=bottom=left=right>` eg: `1` is equal to `1 1 1 1`

### `marginTop: number`

Adds margin on the top of the content of [`View`](./view-component.md) or [`Text`](./text-component.md) component. **Only 0 and positive values are supported**, negative ones are a NOOP.

**The margin area won't be affected by [`backgroundColor`](#backgroundcolor-string) property.**

### `marginBottom: number`

Adds margin on the bottom of the content of [`View`](./view-component.md) or [`Text`](./text-component.md) component. **Only 0 and positive values are supported**, negative ones are a NOOP.

**The margin area won't be affected by [`backgroundColor`](#backgroundcolor-string) property.**

### `marginLeft: number`

Adds margin on left side of the content of [`View`](./view-component.md) or [`Text`](./text-component.md) component. **Only 0 and positive values are supported**, negative ones are a NOOP.

**The margin area won't be affected by [`backgroundColor`](#backgroundcolor-string) property.**

### `marginRight: number`

Adds margin on the right side of the content of [`View`](./view-component.md) or [`Text`](./text-component.md)component. **Only 0 and positive values are supported**, negative ones are a NOOP.

**The margin area won't be affected by [`backgroundColor`](#backgroundcolor-string) property.**

### `padding: string`

Same as `margin` but **the padding area will be affected by [`backgroundColor`](#backgroundcolor-string)property**. **Only 0 and positive values are supported**, negative ones are a NOOP.

### `paddingTop: number`

Same as `marginTop` but **the padding area will be affected by [`backgroundColor`](#backgroundcolor-string) property**. **Only 0 and positive values are supported**, negative ones are a NOOP.

### `paddingBottom: number`

Same as `paddingBottom` but **the padding area will be affected by [`backgroundColor`](#backgroundcolor-string) property**. **Only 0 and positive values are supported**, negative ones are a NOOP.

### `paddingLeft: number`

Same as `marginLeft` but **the padding area will be affected by [`backgroundColor`](#backgroundcolor-string) property**. **Only 0 and positive values are supported**, negative ones are a NOOP.

### `paddingRight: number`

Same as `marginRight` but **the padding area will be affected by [`backgroundColor`](#backgroundcolor-string) property**. **Only 0 and positive values are supported**, negative ones are a NOOP.

### `borderStyle: 'none' | 'solid' | 'double'`

Adds a border to a element using `┌─┐│└─┘` characters (`solid`) or `╔═╗║╚═╝` (`double`). Use `none` to remove border.

**Border will be drawn between [`margin`](#margin-string) and [`padding`](#padding-string) area** - to push content far from the border use [`padding`](#padding-string) and to push the border with the content use [`margin`](#margin-string).

### `borderColor: string`

Same as [`color`](#color-string) but **applied only to a border**.

### `border: string`

Combines both `borderStyle` and `borderColor` property with the following syntax: `<style> <color>` eg: `solid blue`, `double rgb(255, 128, 0)`.
