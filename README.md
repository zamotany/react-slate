# react-stream-renderer

[![Version][version-badge]][package]
[![Build Status][build-badge]][build]
[![MIT License][license-badge]][license]

## Install

```bash
yarn add react-stream-renderer
```

## Usage

```js
import React from 'react';
import { render, Text } from 'react-stream-renderer';

class App extends React.Component {
  render() {
    return (
      <Text style={{ color: 'green' }}>
        Hello world!
      </Text>
    );
  }
}

render(<App />, process.stdout);
```

## API
---

## Functions

### `render(element, writableStream, options): void`

Render given element to writable (Node) stream.

#### `options`

* `hideCursor?: boolean` - Hide cursor if true.
* `clearOnError?: boolean` - Clear screen when process exits due to error being thrown.
* `clearScreenOnExit?: boolean` - Clear screen when process is about to exit.
* `clearScrollbackOnExit?: boolean` - Clear scrollback when process is about to exit (__clearing scrollback also clears the whole screen__).
* `exitOnWarning?: boolean` - Exit when there's a call to `console.warn`.
* `exitOnError?: boolean` - Exit when there's a call to `console.error`.
* `outStream?: any` - Custom writable stream or file path for output from `console`.
* `errStream?: any` - Custom writable stream or file path for errors logged with `console.error`.

## Components

### `Text`

Basic building block. Can render text (strings) or other nested components.

#### Props

* `style?: Style` - Object with [Style properties](#style-properties)


### `KeyPress`

Attach `onPress` callback to `keypress` event. __This component by itself doesn't render anything, but it can render passed `children`.__

#### Props

* `stream: ReadableStream` - (Node) Readable stream to read `keypress` events from.
* `onPress(char: string, key: Key): void` - Callback to attach to `keypress` events.
  ```js
  type Key = {
    name: string,
    ctrl: boolean,
    shift: boolean,
    alt: boolean,
  };
  ```

#### Example

```js
import React from 'react';
import { KeyPress, Text } from 'react-stream-renderer';

class MyComponent extends React.Component {
  _onPress = (char, key) => {
    console.log(char, key);
  }

  render() {
    return (
      <KeyPress stream={process.stdin} onPress={this._onPress}>
        <Text>Hello Wolrd!</Text>
      </KeyPress>
    );
  }
}
```

### `ProgressBar`

Uncontrolled component with progress bar. 

#### Props

* `value: number` - Progress value normalized between 0 and 1 (__values above 1 will be treated as 1__).
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
* `style?: Style` - Object with [Style properties](#style-properties)

#### Example

```js
import React from 'react';
import { ProgressBar, Text } from 'react-stream-renderer';

class MyComponent extends React.Component {
  render() {
    return (
      <Text>
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
      </Text>
    );
  }
}
```

### `Spinner`

Controlled spinner component based on [`cli-spinners`](https://github.com/sindresorhus/cli-spinners).

#### Props

* `type?: string` - [`cli-spinners`](https://github.com/sindresorhus/cli-spinners)'s type (default: `dots`).
* `interval?: number` - Interval between rendering next spinner frames (be default it is taken from specific [`cli-spinners`](https://github.com/sindresorhus/cli-spinners) animation).
* `frames?: string[]` - Custom animation frames.
* `style?: Style` - Object with [Style properties](#style-properties)

#### Example

```js
import React from 'react';
import { Spinner, Text } from 'react-stream-renderer';

class MyComponent extends React.Component {
  render() {
    return (
      <Text>
        <Spinner />
        <Spinner type="line" />
        <Spinner interval={250} />
        <Spinner interval={80} frames={['-', '|', '_', '|']} />
      </Text>
    );
  }
}
```

## Styling and layout


### Layout

#### Positioning

`react-stream-renderer` supports both relative (__default__) and fixed positioning of elements. Use `position: 'fixed'` (and optionally `zIndex`, `left` and `right`) to
make the element fixed to specific position.

#### Display (block vs inline)

`react-stream-renderer` supports both `block` and `inline` display of elements.
By default all `<Text>` components have `display: 'block'` set, whereas all _inline_ text (usually strings) have `display: inline`.

Example:

```js
<Text>A</Text>
<Text>B</Text>
```

renders:

```
A
B
```

but both

```js
<Text>A</Text>
{'B'}
```

and:

```js
<Text style={{ display: 'inline' }}>A</Text>
<Text style={{ display: 'inline' }}>B</Text>

```

renders:

```
AB
```

### Style properties

`react-stream-renderer` supports every color that [`chalk`](https://github.com/chalk/chalk) does.

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


<!-- badges -->
[build-badge]: https://img.shields.io/circleci/project/github/zamotany/react-stream-renderer/master.svg?style=flat-square
[build]: https://circleci.com/gh/zamotany/react-stream-renderer
[license-badge]: https://img.shields.io/npm/l/linaria.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[version-badge]: https://img.shields.io/npm/v/react-stream-renderer.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-stream-renderer
