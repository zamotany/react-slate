# react-stream-renderer

[![Version][version-badge]][package]
[![Build Status][build-badge]][build]
[![MIT License][license-badge]][license]

![Prototype of Haul CLI](./haul-cli-preview.gif)

Prototype of [Haul CLI](https://github.com/callstack/haul). You can see the [source here](https://github.com/callstack/haul/blob/b5de93c580128a8f5be48c01e4f87211d7e70435/src/server/ui.js#L74-L346).

### Features

* Similar and intuitive CSS-like styling
* Custom React Reconciler config, not React re-implementation
* Small and lightweight

### Limitations

* Not as much UI elements as `react-blessed` are provided out of the box
* No support for scroll events

### Documentation

Documentation can be found here: http://react-stream-renderer.surge.sh/

## Installation

```bash
yarn add react react-stream-renderer
```

## Usage

```js
import React from 'react';
import { render, View, makeTTYAdapter } from 'react-stream-renderer';

class App extends React.Component {
  render() {
    return <Text style={{ color: 'green' }}>Hello world!</Text>;
  }
}

render(<App />, makeTTYAdapter(process.stdout).makeEffects());
```

<!-- badges -->

[build-badge]: https://img.shields.io/circleci/project/github/zamotany/react-stream-renderer/master.svg?style=flat-square
[build]: https://circleci.com/gh/zamotany/react-stream-renderer
[license-badge]: https://img.shields.io/npm/l/linaria.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[version-badge]: https://img.shields.io/npm/v/react-stream-renderer.svg?style=flat-square
[package]: https://www.npmjs.com/package/react-stream-renderer
