---
id: packages
title: Packages
sidebar_label: Packages
---

`react-slate` is a monorepo consisting of a few separate packages.

The core functionality lives inside `@react-slate/core` package. It contains essential components and connects `@react-slate/reflow` (layout and rendering logic) to React ecosystem.

[`@react-slate/components`](./components-getting-started.md) is a standard library of components for `react-slate`.

[`@react-slate/utils`](./utils-getting-started.md) contains only helper functions for altering/enhancing terminal, like hiding cursor before rendering, overwriting global `console` so the output doesn't break the UI etc.

[`@react-slate/devtools`](./devtools-getting-started.md) is a optional `@react-slate/core`'s dependency with binary and instruments to enhance developer experience.
