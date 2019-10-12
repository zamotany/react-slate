<p align="center">
  <img alt="react-slate" src="https://raw.githubusercontent.com/zamotany/react-slate/master/docs/_assets/react_slate_logo.png" width="700">
</p>

<p align="center">
  Write interactive CLI apps with React
</p>

---

### Website & documentation

https://zamotany.github.io/react-slate/

### Features

* Render React apps to terminal (`render`), string (`renderToString`) or as a JSON tree (`renderToJson`).
* Build layouts with FlexBox (https://github.com/vislyhq/stretch).
* Render your app to alternative screen buffer and go back to the previous content upon exit.
* Log messages to main screen buffer with `console` when exiting.
* Disable colors with [`NO_COLOR`](https://no-color.org/) environment variable.
* Use standard ANSI colors, RBG, Hex and CSS keywords to style your app.
* Use built-in `<Progress />` and `<Spinner />` components.
* Get layout information using `onLayout` prop.
* Handle clicks using `onClick` prop.
* Detect mouse wheel events using `onWheel` prop.
* Use `for await` to continuously render your app using `renderToString` or `renderToJson`.
* Support for absolute positioning and depth (`zIndex`).
* Built with TypeScript.

Please check out [Roadmap](https://github.com/zamotany/react-slate/issues/99) for in-progress and planned features. 

### Limitations

* Web components are not compatible.
* Strings must be wrapped in a `<Text>` component.

## Installation

```bash
yarn add react @react-slate/core
```
