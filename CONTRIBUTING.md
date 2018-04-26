# Contributing guide

`react-slate` is a monorepo with multiple npm packages. The infrastructure is handled by [yarn workspaces](https://yarnpkg.com/en/docs/workspaces) and [Lerna](https://lernajs.io/).

## Contributing to the docs/website

The website is powered by [Docusaurus](https://docusaurus.io/) with actual documentation living inside `docs/` directory. If you want to locally see the changes, please follow the steps below:

1.  `git clone https://github.com/zamotany/react-slate.git` (if you haven't)
2.  `cd website`
3.  `yarn`
4.  `yarn start`

This will spawn a server at `http://localhost:3000` with the website. Now, whenever you make changes to `docs/`, reload the page and see your changes.

## Contributing to the codebase

In order to contribute to the codebase, please follow the steps below to setup the development environment:

1.  `git clone https://github.com/zamotany/react-slate.git` (if you haven't)
2.  `cd react-slate`
3.  `yarn`

From this point, you can use the following scripts:

* `yarn build` - Transpile `src/` files to `build/` in every package from `packages/`.
* `yarn watch` - Same as `build`, but also watches for changes in every package from `packages/`.
* `yarn flow` - Run `flow` to type check the code.
* `yarn lint` - Run ESLint to line the code.
* `yarn test` - Run Jest to execute test suites.
* `yarn format` - Run Prettier to fix formating (usually you don't have to do it, since the prettier is integrated into ESLint).
* `yarn link-packages` - Run `yarn link` in every package from `packages/`.
* `yarn add-contributor` - Adds new contributor to a contributors list in `README.md`.

If you want to manually test your changes or see it in action, there's a package `react-slate-playground`, which you can use to experiment. Inside this project everything is liked, so all you need to do is run `yarn build` or `yarn watch` and then `node ./packages/react-slate-playground/bin` to run it.

Alternatively, if you already have a project which uses `react-slate`, you can run `yarn link-packages` and then link each package to in your project using `yarn link <package-name>` eg: `yarn link react-slate`. Remember to run `yarn build` after making changes or have `yarn watch` running.

## Before making a PR

1.  Please make sure the test, flow and lint are passing.
2.  Please add yourself to a contributors list by running `yarn add-contributor`.
