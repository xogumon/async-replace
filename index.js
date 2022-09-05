async function asyncReplace(string, replacers, options) {
	const opts = Object.assign({}, { debug: !1, flags: void 0 }, options);
	const regexEscape = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
	const debug = (l, t, m) => {
		opts.debug && console[l] && console[l](`[async-replace] ${t}:`, m instanceof Error ? m.message : m);
	};
	try {
		if (typeof string !== "string") throw new Error('"string" must be a string');
		if (typeof replacers !== "object") throw new Error('"replacers" must be an object');
		if (replacers !== null && !Array.isArray(replacers)) {
			const { search, replace, flags } = replacers;
			const matches = [];
			string.replace(
				search instanceof RegExp ? search : new RegExp(regexEscape(search), flags || opts.flags),
				(...args) => {
					matches.push({ match: args[0], values: args });
				}
			);
			if (matches.length === 0) debug("info", "Match", "No matches found");
			for (const { match, values } of matches) {
				const replaceValue =
					typeof replace === "function"
						? await replace(...values)
						: replace instanceof Promise
						? await replace
						: replace;
				debug("info", "Replace", `Replacing ${match} with ${replaceValue}`);
				string = string.replace(match, replaceValue);
			}
		} else if (Array.isArray(replacers)) {
			for (const replacements of replacers) {
				string = await asyncReplace(string, replacements);
			}
		}
	} catch (error) {
		debug("error", "Error", error);
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
