export = asyncReplace;
declare function asyncReplace(
  str: string,
  obj: {
    search: number | string | RegExp;
    replace: string | Function | Promise<string | Function>;
  }[],
  debug?: boolean
): Promise<string>;
