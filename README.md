# async-replace

Asynchronous string replace function for Node.js and browsers (with support for `Promise`).

---

[![npm](https://img.shields.io/npm/v/@xogumon/async-replace)](https://npmjs.com/package/@xogumon/async-replace) [![GitHub Release Date](https://img.shields.io/github/release-date/xogumon/async-replace)](https://github.com/xogumon/async-replace/releases) [![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@xogumon/async-replace?color=blueviolet)](https://unpkg.com/@xogumon/async-replace/index.min.js) [![GitHub](https://img.shields.io/github/license/xogumon/async-replace?color=violet)](LICENSE) [![GitHub last commit](https://img.shields.io/github/last-commit/xogumon/async-replace?color=orange)](https://github.com/xogumon/async-replace) [![GitHub issues](https://img.shields.io/github/issues/xogumon/async-replace?color=red)](https://github.com/xogumon/async-replace/issues) [![GitHub pull requests](https://img.shields.io/github/issues-pr/xogumon/async-replace?color=green)](https://github.com/xogumon/async-replace/pulls) [![GitHub Workflow Status](https://img.shields.io/github/workflow/status/xogumon/async-replace/Tests)](https://github.com/xogumon/async-replace) [![GitHub Sponsors](https://img.shields.io/github/sponsors/xogumon)](https://github.com/sponsors/xogumon)

---

## Motivation

I was working on a project that needed to replace some strings in a text file asynchronously and I didn't find any package that could do this without needing to call the function for each replacement (different results) on the same string, so I decided to create this package .

## Installation

```bash
npm install @xogumon/async-replace --save # or yarn add @xogumon/async-replace
```

## Usage (Node.js)

```js
const asyncReplace = require("@xogumon/async-replace");
const string = "A {string} with a {promise} in it.";
const replacers = [
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
		search: "it",
		replace: Promise.resolve("this"),
	},
];

asyncReplace(string, replacers).then((result) => {
	console.log(result);
	// This is a string with a promise in this.
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
		console.log(result);
		// This is a string with a promise in this.
	});
</script>
```

You can find a working example in [JSFiddle](https://jsfiddle.net/xogum/sm4709hz/).

You can use the `asyncReplace` function using [unpkg](https://unpkg.com/) or [jsDelivr](https://www.jsdelivr.com/).

- unpkg: `https://unpkg.com/@xogumon/async-replace/index.min.js`
- jsDelivr: `https://cdn.jsdelivr.net/npm/@xogumon/async-replace/index.min.js`

`asyncReplace` is attached to the `window` object when used in the browser (e.g. `window.asyncReplace`).

## API

### asyncReplace(string, replacers, options)

#### string (required)

Type: `string`

The string to replace.

#### replacers (required)

Type: `Array` or `Object`

The `replacers` argument can be an array of objects or a single object.

##### replacers.search (required)

Type: `string` or `RegExp`

The string or regular expression to search for.

##### replacers.replace (required)

Type: `number`, `string`, `function`, `Promise`, or `async function`

The value to replace the `replacers.search` with.

##### replacers.flags (optional)

Type: `string`

The flags to use with the `replacers.search` string (not used if `replacers.search` is a `RegExp`).

- The flags are the same as the flags used in the `RegExp` constructor. See [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) for more information.

#### options (optional)

Type: `Object`

##### options.flags (optional)

Type: `string`

The flags to use with the `string` argument.

- The flags are used with the `RegExp` constructor when `replacers.search` is a `string` and not a `RegExp`.
- If `replacers.search` is a `RegExp`, the `options.flags` are ignored.
- If `replacers` object has a `replacers.flags` property, the `options.flags` are ignored for that object.

##### options.debug (optional)

Type: `boolean`

If `true`, the `asyncReplace` function will log debug messages to the console. Defaults to `false`.

## License

[MIT](LICENSE) © [Valdir "xogum" Ronis](https://github.com/xogumon)

## Support

If you like this project, please consider supporting me on [GitHub Sponsors](https://github.com/sponsors/xogumon).
