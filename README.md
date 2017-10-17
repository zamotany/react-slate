# react-stream-renderer

> 

<a title="Join on Slack" href="https://slack.callstack.io"><img src="https://slack.callstack.io/badge.svg" /></a>

## Install

```bash
git clone https://github.com/zamotany/stream-react-renderer.git && yarn && yarn link
# in project
yarn link stream-react-renderer
```

## Usage

```js
import React from 'react';
import { render, Endl, Text } from 'stream-react-renderer';

function App() {
  return (
    <Text style={{ color: 'green' }} endl>
      Hello world!
    </Text>
  );
}

render(<App />, process.stdout);
```

## API

### `render(element, writableStream): void`

Render given element to writable (Node) stream.

### `Text` (Component)

Basic building block, can render text or other nested components.

#### Props

* `style: Object` - Supported style properties are `color`, `backgroundColor`, `fontWeight`, `fontStyle`, `textDecoration`, `textTransform`, `visibility`

* `endl: boolean` - Whether to end the text with new line.

### `Endl` (Component)

Render new line character (`\n`).

#### Props

* `times: number` - How many new lines should be rendered.

## License

[MIT](./LICENSE)
