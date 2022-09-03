async function asyncReplace(str, obj, debug = false) {
  function debugLog({ message, value }, level = "log") {
    if (debug && typeof debug === "boolean" && console[level]) {
      console[level](`[async-replace] ${message}: ${value}`);
    }
  }
  try {
    if (typeof str !== "string")
      throw new Error("First argument must be a string");
    if (obj !== null && !Array.isArray(obj) && typeof obj === "object") {
      const { search, replace } = obj;
      const matches = [];
      const regex = new RegExp(search);
      str.replace(regex, (...values) => {
        matches.push({
          match: values[0],
          values,
        });
        return values[0];
      });
      if (matches.length === 0) {
        debugLog({
          message: "No matches found",
          value: search,
        });
      }
      for (const match of matches) {
        const { match: matched, values } = match;
        const replaceValue =
          typeof replace === "function"
            ? await replace(...values)
            : replace instanceof Promise
            ? await replace
            : replace;
        str = str.replace(matched, replaceValue);
        debugLog({ message: "Match found", value: matched });
        debugLog({ message: "Replace value", value: replaceValue });
      }
      return str;
    } else if (Array.isArray(obj)) {
      for (const replacements of obj) {
        str = await asyncReplace(str, replacements);
      }
      return str;
    } else {
      throw new Error(
        "Second argument must be an object or an array of objects"
      );
    }
  } catch (e) {
    if (e instanceof Error) {
      debugLog({ message: "Error", value: e.message }, "error");
    } else {
      debugLog({ message: "Error", value: e }, "error");
    }
    return str;
  }
}

if (typeof window !== "undefined") {
  window.asyncReplace = asyncReplace;
} else if (typeof module !== "undefined") {
  module.exports = asyncReplace;
} else {
  throw new Error("This environment is not supported");
}
