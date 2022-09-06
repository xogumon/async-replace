async function asyncReplace(string, replacers, options) {
  const opts = Object.assign({}, { debug: !1, flags: void 0 }, options);
  const regexEscape = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  const debug = (m, l = "log") => {
    opts.debug && console[l] && console[l](`[asyncReplace]`, m instanceof Error ? m.message : m);
  };
  try {
    if (typeof string !== "string") throw new Error('"string" must be a string');
    if (typeof replacers !== "object") throw new Error('"replacers" must be an object');
    if (replacers !== null && !Array.isArray(replacers)) {
      const { search, replace, flags } = replacers;
      const matches = [];
      string.replace(
        search instanceof RegExp ? search : new RegExp(regexEscape(search), flags || opts.flags),
        (...args) => matches.push(args)
      );
      if (matches.length === 0) debug("No matches found");
      for (const args of matches) {
        const match = args[0];
        const response = async (replacer) =>
          typeof replacer === "function"
            ? await replacer(...args)
            : replacer instanceof Promise
              ? await replacer.then(async (replacer) => await response(replacer))
              : replacer;
        const replacer = await response(replace);
        debug(`Replacing "${match}" with "${replacer}"`);
        string = string.replace(match, replacer);
      }
    } else if (Array.isArray(replacers)) {
      for (const replacements of replacers) {
        string = await asyncReplace(string, replacements);
      }
    }
  } catch (error) {
    debug(error, "error");
  }
  return string;
}

if (typeof window !== "undefined") {
  window.asyncReplace = asyncReplace;
} else if (typeof module !== "undefined") {
  module.exports = asyncReplace;
} else {
  throw new Error("This environment is not supported");
}
