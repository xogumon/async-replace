module.exports = async function asyncReplace(
  string,
  searchReplaces,
  debug = false
) {
  try {
    if (typeof string !== "string")
      throw new Error('"string" is not a string type');
    if (!searchReplaces || typeof searchReplaces !== "object")
      throw new Error(
        '"searchReplaces" must be an object with search and replace keys'
      );
    if (typeof searchReplaces === "object" && !Array.isArray(searchReplaces)) {
      const { search, replace } = searchReplaces;
      if (typeof search === "string" || search instanceof RegExp) {
        if (search instanceof RegExp) {
          if (!search.test(string))
            throw new Error(`No match for ${search.toString()}`);
        } else {
          if (!string.includes(search))
            throw new Error(`No match found: ${search}`);
        }
        if (
          typeof replace === "string" ||
          typeof replace === "function" ||
          typeof replace === "number"
        ) {
          if (
            typeof replace === "function" &&
            typeof replace() === "object" &&
            typeof replace().then === "function" &&
            typeof replace().catch === "function"
          ) {
            const result = await replace();
            return string.replace(search, result);
          } else {
            return string.replace(search, replace);
          }
        } else if (
          replace !== null &&
          typeof replace === "object" &&
          typeof replace.then === "function" &&
          typeof replace.catch === "function"
        ) {
          const result = await replace;
          return string.replace(search, result);
        } else {
          throw new Error(
            `Invalid replace type: "${typeof replace}" (must be string, number, function, or promise)`
          );
        }
      } else {
        throw new Error('Invalid "searchReplaces" object');
      }
    } else if (Array.isArray(searchReplaces)) {
      for (const replacements of searchReplaces) {
        string = await asyncReplace(string, replacements);
      }
      return string;
    } else {
      throw new Error('Invalid "searchReplaces" value');
    }
  } catch (e) {
    if (debug) console.error(e);
    return string;
  }
};
