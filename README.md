# async-replace

Asynchronous string replace function for Node.js and browsers (with support for `Promise`).

## Summary

This module provides a function that is similar to `String.prototype.replace` but works asynchronously.

- [Motivation](#motivation)
- [Installation](#installation)
- [Usage (Node.js)](#usage-nodejs)
- [Usage (Browser)](#usage-browser)
- [License](#license)

---

[![npm](https://img.shields.io/npm/v/@xogumon/async-replace)](https://npmjs.com/package/@xogumon/async-replace) [![GitHub Release Date](https://img.shields.io/github/release-date/xogumon/async-replace)](https://github.com/xogumon/async-replace/releases) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@xogumon/async-replace)](https://unpkg.com/@xogumon/async-replace/index.min.js) [![GitHub](https://img.shields.io/github/license/xogumon/async-replace)](LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/xogumon/async-replace)](https://github.com/xogumon/async-replace) [![GitHub issues](https://img.shields.io/github/issues/xogumon/async-replace?color=red)](https://github.com/xogumon/async-replace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/xogumon/async-replace)](https://github.com/xogumon/async-replace/pulls) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/xogumon/async-replace/Tests)](https://github.com/xogumon/async-replace) [![GitHub Sponsors](https://img.shields.io/github/sponsors/xogumon)](https://github.com/sponsors/xogumon)

---

## Motivation

I was working on a project that needed to replace some strings in a text file asynchronously and I didn't find any package that could do this without needing to call the function for each replacement (different results) on the same string, so I decided to create this package.

## API - `asyncReplace(string, replacers, options)`

### string (required)

- Type: `string`

- The string to replace.

### replacers (required)

- Type: `Array` | `Object`

- The `replacers` argument can be an array of objects or a single object.

#### replacers.search (required)

- Type: `string` or `RegExp`

- The string or regular expression to search for.

#### replacers.replace (required)

- Type: `any`

- The value to replace the `replacers.search` with.

#### replacers.flags (optional)

- Type: `string`

- The flags to use with the `replacers.search` string (not used if `replacers.search` is a `RegExp`).

- The flags are the same as the flags used in the `RegExp` constructor. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for more information.

### options (optional)

- Type: `Object`

#### options.flags (optional)

- Type: `string`

- The flags to use with the `replacers.search` string (not used if `replacers.search` is a `RegExp`).

- If `replacers` object has a `replacers.flags` property, the `options.flags` are ignored for that object and the `replacers.flags` are used instead.

#### options.debug (optional)

- Type: `boolean`

- If `true`, the `asyncReplace` function will log debug messages to the console. Defaults to `false`.

## Installation

```bash
npm install @xogumon/async-replace --save # or yarn add @xogumon/async-replace
```

## Usage (Node.js)

```js
const asyncReplace = require("@xogumon/async-replace");
asyncReplace("A string with some words to replace", [
	{
		search: "string",
		replace: new Promise((resolve) => setTimeout(() => resolve("text"), 1000)),
	},
	{
		search: "words",
		replace: new Promise((resolve) => setTimeout(() => resolve("letters"), 1000)),
	},
]).then((result) => {
	console.log(result); // A text with some letters to replace
});
```

You can run a test with `npm test` or `yarn test`. The test will run with [Jest](https://jestjs.io/).

## Usage (Browser)

```html
<script src="https://unpkg.com/@xogumon/async-replace/index.min.js"></script>
<script>
	asyncReplace("A {string} with a {promise} in it.", [
		{
			search: "{promise}",
			replace: async () => {
				return await Promise.resolve("promise");
			},
		},
		{
			search: "{string}",
			replace: "string",
		},
		{
			search: "A",
			replace: () => {
				return "This is a";
			},
		},
		{
			search: "it.",
			replace: Promise.resolve("this."),
		},
	]).then((result) => {
		console.log(result); // This is a string with a promise in this.
	});
</script>
```

You can find a working example in [JSFiddle](https://jsfiddle.net/xogum/sm4709hz/).

You can use the `asyncReplace` function through [unpkg](https://unpkg.com/) or [jsDelivr](https://www.jsdelivr.com/) CDN:

```html
<script src="https://unpkg.com/@xogumon/async-replace/index.min.js"></script>
```

```html
<script src="https://cdn.jsdelivr.net/npm/@xogumon/async-replace/index.min.js"></script>
```

`asyncReplace` is attached to the `window` object when used in the browser (e.g. `window.asyncReplace`).

## License

[MIT](LICENSE) © [Valdir "xogum" Ronis](https://github.com/xogumon)

## Support

If you like this project, please consider supporting me on [GitHub Sponsors](https://github.com/sponsors/xogumon).
