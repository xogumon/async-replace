# @xogumon/async-replace

it's like "string".replace() with promises

## Installation

```bash
npm install @xogumon/async-replace
```

## Usage

```js
const asyncReplace = require("@xogumon/async-replace");
const str = "hello world";
const searchReplaces = [
  {
    search: /hello/g,
    replace: async (match) => {
      return "goodbye";
    },
  },
  {
    search: /world/g,
    replace: async (match) => {
      return "universe";
    },
  },
];
const result = await asyncReplace(str, searchReplaces);
console.log(result); // "goodbye universe"
```

## API

### asyncReplace(str, searchReplaces, debug = false)

#### str

Type: `string`

The string to search and replace.

#### searchReplaces

Type: `Array<{ search: RegExp | string, replace: (match: string) => Promise<string> }>`

The search and replace pairs.

#### debug

Type: `boolean`

If true, the function will log the search and replace pairs.

## License

MIT © [Valdir Ronis](https://github.com/xogumon)