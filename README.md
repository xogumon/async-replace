# async-replace

It's useful for replacing text in a string with a promise/async function.

---

![npm](https://img.shields.io/npm/v/@xogumon/async-replace) ![GitHub Release Date](https://img.shields.io/github/release-date/xogumon/async-replace) ![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@xogumon/async-replace?color=blueviolet) ![GitHub](https://img.shields.io/github/license/xogumon/async-replace?color=violet) ![GitHub last commit](https://img.shields.io/github/last-commit/xogumon/async-replace?color=orange) ![GitHub issues](https://img.shields.io/github/issues/xogumon/async-replace?color=red) ![GitHub pull requests](https://img.shields.io/github/issues-pr/xogumon/async-replace?color=green)

---

## Installation

```bash
npm install @xogumon/async-replace --save # or yarn add @xogumon/async-replace
```

## Compatibility

This package is compatible with Node.js and browsers (with support for `Promise`).

## Usage (Node.js)

```js
const asyncReplace = require("@xogumon/async-replace");
const str = "A {string} with a {promise} in it.";
const obj = [
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

asyncReplace(str, obj).then((result) => {
  console.log(result);
  // This is a string with a promise in this.
});
```

## Test (Node.js)

```bash
npm test # or yarn test
```

## Usage (browser)

```html
<script src="https://unpkg.com/@xogumon/async-replace/index.min.js"></script>
<script>
  const str = "A {string} with a {promise} in it.";
  const obj = [
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
  ];

  asyncReplace(str, obj).then((result) => {
    console.log(result);
    // This is a string with a promise in this.
  });
</script>
```

## Test (Browser)

You can test this package online in [JSFiddle](https://jsfiddle.net/xogum/sm4709hz/).

## CDNs (for browsers)

You can use this package in your browser using [unpkg](https://unpkg.com/@xogumon/async-replace/index.min.js) or [jsdelivr](https://www.jsdelivr.com/package/npm/@xogumon/async-replace) cdn services.

```html
<script src="https://unpkg.com/@xogumon/async-replace/index.min.js"></script>
<!-- or https://cdn.jsdelivr.net/npm/@xogumon/async-replace/index.min.js -->
```

## API

### asyncReplace(str, obj, debug = false)

#### str

Type: `string`

The string to search and replace.

#### obj

Type: `Array<{ search: RegExp | string, replace: Promise<string> | Function | string | number }>`

The search and replace pairs. Use an array of objects with the `search` and `replace` properties or an object with the `search` and `replace` properties if you want to replace only one thing.

- The `search` property can be a `RegExp`, `string` or `number`.
- The `replace` property can be any type of value, but it's recommended to use a `Promise` or a `Function` that returns a `Promise` or a `string`. You can also use a `string` or a `number` if you don't need to do anything async.

#### debug

Type: `boolean`

If `true`, it will log the `search` and `replace` results and any error that occurs.

## License

MIT © [Valdir "xogum" Ronis](https://github.com/xogumon)
