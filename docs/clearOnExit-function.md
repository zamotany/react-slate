---
id: clearOnExit-function
title: clearOnExit
sidebar_label: clearOnExit
---

```js
clearOnExit(shouldClearScrollback: boolean = false): void
```

Clear screen or scrollback (if `shouldClearScrollback` is `true`) when process is about to exit.

### Notes

* Contains side effects!
* Available in `react-slate-utils` package.

### Example

```js
import { clearOnExit } from 'react-slate-utils';

clearOnExit(true);
```
