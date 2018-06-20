# react-slate

[![Build Status][build-badge]][build]
[![MIT License][license-badge]][license]

[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors)
[![PRs Welcome][prs-welcome-badge]][prs-welcome]
[![Chat][chat-badge]][chat]
[![Code of Conduct][coc-badge]][coc]

[![tweet][tweet-badge]][tweet]

| Package                   | Version                                                                      |
| ------------------------- | ---------------------------------------------------------------------------- |
| `@react-slate/core`       | [![Version][react-slate-core-version]][react-slate-core-package]             |
| `@react-slate/components` | [![Version][react-slate-components-version]][react-slate-components-package] |
| `@react-slate/utils`      | [![Version][react-slate-utils-version]][react-slate-utils-package]           |

---

![Prototype of Haul CLI](./haul-cli-preview.gif)

Prototype of [Haul CLI](https://github.com/callstack/haul). You can see the [source here](https://github.com/callstack/haul/blob/b5de93c580128a8f5be48c01e4f87211d7e70435/src/server/ui.js#L74-L346).

### Features

* Similar and intuitive CSS-like styling
* Custom React Reconciler config, not React re-implementation
* Small and lightweight

### Limitations

* Not as much UI elements as `react-blessed` are provided out of the box
* No support for scroll events

### Documentation

Documentation can be found here: http://react-slate.surge.sh/

## Installation

```bash
yarn add react @react-slate/core
```

## Usage

```js
import React from 'react';
import { renderToTerminal, View } from '@react-slate/core';

class App extends React.Component {
  render() {
    return <View style={{ color: 'green' }}>Hello world!</View>;
  }
}

renderToTerminal(<App />, process.stdout);
```

## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/17573635?v=4" width="100px;"/><br /><sub><b>Paweł Trysła</b></sub>](https://twitter.com/_zamotany)<br />[💬](#question-zamotany "Answering Questions") [🐛](https://github.com/zamotany/react-slate/issues?q=author%3Azamotany "Bug reports") [💻](https://github.com/zamotany/react-slate/commits?author=zamotany "Code") [🎨](#design-zamotany "Design") [📖](https://github.com/zamotany/react-slate/commits?author=zamotany "Documentation") [💡](#example-zamotany "Examples") [🤔](#ideas-zamotany "Ideas, Planning, & Feedback") [⚠️](https://github.com/zamotany/react-slate/commits?author=zamotany "Tests") | [<img src="https://avatars2.githubusercontent.com/u/1174278?v=4" width="100px;"/><br /><sub><b>Satyajit Sahoo</b></sub>](https://twitter.com/@satya164)<br />[💻](https://github.com/zamotany/react-slate/commits?author=satya164 "Code") [🤔](#ideas-satya164 "Ideas, Planning, & Feedback") [👀](#review-satya164 "Reviewed Pull Requests") | [<img src="https://avatars3.githubusercontent.com/u/8135252?v=4" width="100px;"/><br /><sub><b>Jakub Beneš</b></sub>](https://jukben.cz)<br />[💻](https://github.com/zamotany/react-slate/commits?author=jukben "Code") [👀](#review-jukben "Reviewed Pull Requests") | [<img src="https://avatars0.githubusercontent.com/u/7389005?v=4" width="100px;"/><br /><sub><b>Mikhail Nikolaevskiy</b></sub>](https://github.com/mik639)<br />[💻](https://github.com/zamotany/react-slate/commits?author=mik639 "Code") |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- badges (common) -->

[build-badge]: https://img.shields.io/circleci/project/github/zamotany/react-slate/master.svg?style=flat-square
[build]: https://circleci.com/gh/zamotany/react-slate
[license-badge]: https://img.shields.io/npm/l/react-slate.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT
[prs-welcome-badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[prs-welcome]: http://makeapullrequest.com
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://github.com/zamotany/react-slate/blob/master/CODE_OF_CONDUCT.md
[chat-badge]: https://img.shields.io/badge/chat-discord-brightgreen.svg?style=flat-square&colorB=7289DA&logo=discord
[chat]: https://discord.gg/zwR2Cdh
[tweet-badge]: https://img.shields.io/badge/tweet-react--slate-blue.svg?style=flat-square&colorB=1DA1F2&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAAXNSR0IArs4c6QAAAaRJREFUOBGtlM8rBGEYx3cWtRHJRaKcuMtBSitxkCQ3LtzkP9iUUu5ODspRHLhRLtq0FxeicEBC2cOivcge%2FMgan3fNM8bbzL4zm6c%2BPT%2Fe7%2FO8887svrFYBWbbtgWzsAt3sAcpqJFxxF1QV8oJFqFPFst5dLWQAT87oTgPB7DtziFRT1EA4yZolsFkhwjGYFRO8Op0KD8HVe7unoB6PRTBZG8IctAmG1xrHcfkQ2B55sfI%2ByGMXSBqV71xZ8CWdxBxN6ThFuECDEAL%2Bc9HIzDYumVZ966GZnX0SzCZvEqTbkaGywkyFE6hKAsBPhFQ18uPUqh2ggJ%2BUor%2F4M%2F%2FzOC8g6YzR1i%2F8g4vvSI%2ByD7FFNjexQrjHd8%2BnjABI3AU4Wl16TuF1qANGll81jsi5qu%2Bw6XIsCn4ijhU5FmCJpkV6BGNw410hfSf6JKBQ%2FUFxHGYBnWnmOwDwYQ%2BwzdHqO75HtiAMJfaC7ph32FSRJCENUhDHsLaJkL%2FX4wMF4%2BwA5bgAcrZE4sr0Cu9Jq9fxyrvBHWbNkMD5CEHWTjjT2m6r5D92jfmbbKJEWuMMAAAAABJRU5ErkJggg%3D%3D
[tweet]: https://twitter.com/intent/tweet?text=Check%20out%20react-slate!%20https://github.com/zamotany/react-slate%20%F0%9F%91%8D

<!-- badges (packages) -->

[react-slate-core-version]: https://img.shields.io/npm/v/@react-slate/core.svg?style=flat-square
[react-slate-core-package]: https://www.npmjs.com/package/@react-slate/core
[react-slate-components-version]: https://img.shields.io/npm/v/@react-slate/components.svg?style=flat-square
[react-slate-components-package]: https://www.npmjs.com/package/@react-slate/components
[react-slate-utils-version]: https://img.shields.io/npm/v/@react-slate/utils.svg?style=flat-square
[react-slate-utils-package]: https://www.npmjs.com/package/@react-slate/utils
