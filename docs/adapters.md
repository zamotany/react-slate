---
id: adapters
title: Adapters
sidebar_label: Adapters
---

## Concept

In order to support wide variety of cases, instead of accepting [WritableStream](https://nodejs.org/api/stream.html#stream_writable_streams), `react-slate` uses a adapters as an simple abstraction over the output target. This means, that you can support not only terminals (`process.stdout`/`process.stderr`) but also remote targets through - for example - `WebSockets`.

`react-slate` -> `Adapter` -> `Target`

## Available adapters

* [`makeTTYAdapter`](./tty-adapter.md) - for terminal apps (CLIs etc)
* [`makeTestAdapter`](./test-adapter.md) - for testing on CI

## Custom adapter

You are free to your own adapter, as long as it implements required functions from [`IBaseAdapter` interface](https://github.com/zamotany/react-slate/blob/master/packages/react-slate/src/adapters/BaseAdapter.js#L4-L43) or extend from [`BaseAdapter` class](https://github.com/zamotany/react-slate/blob/master/packages/react-slate/src/adapters/BaseAdapter.js#L49-L71):

* `isReady: boolean` - Tells if the adapter is ready. For example if there's a need to trigger some side effects this flag can be used to distinct if they're applied or not.

* `notReadyErrorMessage: string` - Error message to show if the adapter is not ready yet.

* `forceFullPrint: boolean` - Switches to rendering full content of the canvas instead of drawing only damaged lines.

* `getSize(): { width: number, height: number }` - Provides width and height of the canvas on which the content will be rendered.

* `print(data: string, metadata: { isFullPrint: boolean }): void` - Prints rendered content. This is the place to flush content to the host environment.

* `clear(): void` - Clear the content below the cursor position, which will be set before using `setCursorPosition`.

* `setCursorPosition(x: number, y: number): void` - Moves cursor to specific coordinates.

### Example

```js
import fs from 'fs';
import path from 'path';
import { render, BaseAdapter, Text } from 'react-slate';

class FileAdapter extends BaseAdapter {
  constructor() {
    super({ forceFullPrint: true });
  }

  getSize() {
    return {
      height: 200,
      width: 100,
    };
  }

  print(data: string) {
    fs.writeFileSync(path.resolve('myFile.txt'), data);
  }
}

render(<Text>Hello World!</Text>, new FileAdapter());
```
