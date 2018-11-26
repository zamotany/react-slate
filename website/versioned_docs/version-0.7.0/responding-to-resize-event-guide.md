---
id: version-0.7.0-responding-to-resize-event-guide
title: Responding to `resize` event
sidebar_label: Responding to `resize` event
original_id: responding-to-resize-event-guide
---

Starting from version `0.5.1`, `react-slate` supports re-rendering app to the same target, like `process.stdout`, which means rendering after the terminal was resized is a matter of attaching `resize` event handler and calling `renderToTerminal` again:

```js
import { renderToTerminal } from '@react-slate/core';

const App = () => {
  /* ... */
};

// Initial render
renderToTerminal(<App />, process.stdout);

process.on('resize', () => {
  // Re-render app with new terminal size
  renderToTerminal(<App />, process.stdout);
});
```

The above example works fine. However, you might feel lag when you resize the terminal's window. That's because the `resize` event is fired multiple times and sometimes really often.

The solution is to **throttle** or **debounce** the event handler. For that purpose we can use `lodash/throttle` or `lodash/debounce`:

```bash
yarn add lodash
```

and (throttle version):

```js
import { renderToTerminal } from '@react-slate/core';
import throttle from 'lodash/throttle';

const App = () => {
  /* ... */
};

// Initial render
renderToTerminal(<App />, process.stdout);

process.on(
  'resize',
  throttle(() => {
    // Re-render app with new terminal size
    renderToTerminal(<App />, process.stdout);
  }, 100)
);
```

Using `lodash/debounce` is similar.

For smaller apps, throttle should be preferred since, it will make your app feel more responsive. As for slightly larger or more complex, it is better to debounce it - you don't want to make your app feel less responsive or have high CPU usage without any benefits.
