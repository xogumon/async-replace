export = asyncReplace;
declare function asyncReplace(
	string: string,
	replacers: {
		search: number | string | RegExp;
		replace: any;
		flags?: string;
	}[],
	options?: {
		debug?: boolean;
		flags?: string;
	}
): Promise<string>;
