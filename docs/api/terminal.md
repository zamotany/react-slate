# terminal

#### Description:

Exposed instance of Terminal from [terminal-kit](https://github.com/cronvel/terminal-kit/).

You can use it for low-level interaction with terminal session.

#### Example:

```js
import { terminal } from '@react-slate/core';

terminal.on('resize', (width, height) => {
  console.log('Terminal resized', { width, height });
});
```
