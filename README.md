# async-replace

It's useful for replacing text in a string with a promise/async function.

## Installation

```bash
npm install @xogumon/async-replace --save # or yarn add @xogumon/async-replace
```

## Usage

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

## Test it

```bash
npm test # or yarn test
```

## API

### asyncReplace(str, obj, debug = false)

#### str

Type: `string`

The string to search and replace.

#### obj

Type: `Array<{ search: RegExp | string, replace: Promise<string> | Function | string | number }>`

The search and replace pairs. Use an array of objects with the `search` and `replace` properties or an object with the `search` and `replace` properties if you want to replace only one thing.

- The `search` property can be a `RegExp` or a `string`.
- The `replace` property can be a `Promise`, `Function`, `string` or `number`.

#### debug

Type: `boolean`

If `true`, it will log the `search` and `replace` results and any error that occurs.

## License

MIT © [Valdir "xogum" Ronis](https://github.com/xogumon)
