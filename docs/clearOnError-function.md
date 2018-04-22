---
id: clearOnError-function
title: clearOnError
sidebar_label: clearOnError
---

```js
clearOnError(): void
```

Clear screen (scrollback will be untouched) when process is about to exit due to an error.

### Notes

* Contains side effects!
* Available in `react-slate-utils` package.

### Example

```js
import { clearOnError } from 'react-slate-utils';

clearOnError();
```
