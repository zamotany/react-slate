---
id: packages
title: Packages
sidebar_label: Packages
---

`react-slate` is a monorepo consisting of few separate packages.

The core functionality lives inside `react-slate` package. it contains rendering logic, layout system and styling, plus some essential components.

`react-slate-utils` on the other hand contains only helper functions for altering/enhancing terminal, like hiding cursor before rendering, overwriting global `console` so the output doesn't break the UI etc.
You can check the list of exported functions in `Utils` group in the navigation bar.
