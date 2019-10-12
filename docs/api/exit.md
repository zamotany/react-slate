# exit

#### Definition:

```ts
function exit(code?: number = 0): void
```

#### Description:

Exit from the app programmatically.

`exit` function contains cleanup logic to return to valid and usable terminal session and thus, **should be used instead of `process.exit`**.

> `exit` should only be used when rendering app with [`renderFullscreen`](api/render-fullscreen). To exit programmatically when rendering using different metho use `terminal.processExit(code)`.

#### Arguments:

| Name   | Type     | Optional | Default value | Description                |
| ------ | -------- | :------: | ------------- | -------------------------- |
| `code` | `number` |   Yes    | `0`           | Exit code for the process. |

#### Example:

```js
import {exit} from '@react-slate/core';

exit();
// or
exit(1);
```
