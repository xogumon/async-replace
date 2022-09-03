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
      const matches = new RegExp(search).exec(str);
      const match = matches.find((e) => e);
      if (match) {
        const replaceValue =
          typeof replace === "function"
            ? await replace(...matches)
            : replace instanceof Promise
            ? await replace
            : replace;
        const result = str.replace(search, replaceValue);
        debugLog({ message: "Match found", value: match });
        debugLog({ message: "Replace value", value: replaceValue });
        return result;
      } else {
        debugLog({ message: "No match found", value: search });
        return str;
      }
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
