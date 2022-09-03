async function asyncReplace(str, obj, debug = false) {
  function debugLog({ message, value }, level = "log") {
    if (debug) {
      console[level](`[asyncReplace] ${message}: ${value}`);
    }
  }
  try {
    if (typeof str !== "string")
      throw new Error("First argument must be a string");
    if (obj !== null && !Array.isArray(obj) && typeof obj === "object") {
      const { search, replace } = obj;
      if (
        typeof search === "number" ||
        typeof search === "string" ||
        search instanceof RegExp
      ) {
        if (search instanceof RegExp && !search.test(str)) {
          throw new Error(`No match for "${search.toString()}"`);
        } else if (!search instanceof RegExp && !str.includes(search)) {
          throw new Error(`No match for "${search}"`);
        }
        if (
          (typeof replace === "function" &&
            typeof replace() === "object" &&
            typeof replace().then === "function" &&
            typeof replace().catch === "function") ||
          (replace !== null &&
            typeof replace === "object" &&
            typeof replace.then === "function" &&
            typeof replace.catch === "function")
        ) {
          const result =
            typeof replace === "function" ? await replace() : await replace;
          debugLog({ message: "Match", value: search }, "info");
          debugLog({ message: "Result", value: result }, "info");
          return str.replace(search, result);
        }
        debugLog({ message: "Match", value: search }, "info");
        debugLog({ message: "Result", value: replace }, "info");
        return str.replace(search, replace);
      } else {
        throw new Error('"search" must be a string, number, or RegExp');
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
  throw new Error("asyncReplace is not supported in this environment");
}
