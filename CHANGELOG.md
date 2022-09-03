# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Improved documentation and examples
- Improved type definitions for TypeScript users

## [1.0.3] - 2022-09-03

### Added

- More tests: run `npm test` to run the tests

### Fixed

- Finally this package is published to npm and github packages
- `index.d.ts` is now included in the package and is correctly referenced in `package.json`
- `match` regex is now correctly escaped (a night of sleep helps)

### Notes for users

- We don't use `Promise.all`, because we want to keep the order of the results with success and errors
- Finally you can install this package using `npm install @xogum/async-replace` or `yarn add @xogumon/async-replace`.
- As we are on npm, you can use this package in your browser using [unpkg](https://unpkg.com/@xogumon/async-replace/index.min.js) or [jsdelivr](https://www.jsdelivr.com/package/npm/@xogumon/async-replace) cdn services.
- The minified version of this package is so small that you can even copy and paste it in your project if you want ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@xogumon/async-replace)

## [1.0.2] - 2022-09-02

### Added

- GitHub workflow to automatically publish this package when a new release is created
- devDependencies: `typescript` to generate type definitions for the package

### Fixed

- The package not being published to GitHub Packages (I think this is fixed now)

### Notes for users

- Sorry for that, I'm still learning how to publish packages to GitHub Packages and I'm not sure if this is fixed yet
- You can still install the package by running `npm install xogumon/async-replace` without at sign if an 404 error occurs when trying to install it from npm - I'll try to fix this as soon as possible if it's not fixed already

## [1.0.1] - 2022-09-02

### Added

- `CHANGELOG.md` file
- More tests to `test.js` file (check it out to see how to use the package)
- Compatibility with Browsers (with support for `Promise`)
- More logs on `debug` mode (default: `false`)
- devDependencies: `uglify-js` (to minify the code)

### Changed

- The `README.md` file with more information about the package
- The `replace` value on the `obj` array to be any type of value (not only `string`, `number`, `Promise` and `Function`) once `String.prototype.replace` can handle any type of value (that is not a `Promise`, otherwise this package wouldn't even exist 😅)
- Better throw error messages (with `debug` mode)
- The `package.json` file with `publishConfig` and `files` properties

### Removed

- Nothing yet 😅

## [1.0.0] - 2022-09-01

This is the first release of the package 🎉

### Added

- `index.js` file (the package itself) with the `asyncReplace` function
- `test.js` file (check it out to see how to use the package)
- `package.json` file with the package information and dependencies (only `jest` for testing purposes)
- `README.md` file with the package description and usage
- `LICENSE` file with the license information (MIT)

### Changed

- Nothing at the moment 😅

### Removed

- Nothing as this is the first release of the package
