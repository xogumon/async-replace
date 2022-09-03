# Changelog

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
