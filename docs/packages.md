---
id: packages
title: Packages
sidebar_label: Packages
---

`react-slate` is a monorepo consisting of few separate packages.

The core functionality lives inside `@react-slate/core` package. it contains rendering logic, layout system and styling, plus some essential components.

[`@react-slate/components`](./components-getting-started.md) is a standard library of components for `react-slate`.

[`@react-slate/interactive`](./interactive-getting-started.md) consists of special components to interact with terminal, for example to capture user input.

[`@react-slate/utils`](./utils-getting-started.md) contains only helper functions for altering/enhancing terminal, like hiding cursor before rendering, overwriting global `console` so the output doesn't break the UI etc.
