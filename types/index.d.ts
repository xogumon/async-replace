export = asyncReplace;
declare function asyncReplace(
  str: string,
  obj: {
    search: number | string | RegExp;
    replace: any;
  }[],
  debug?: boolean
): Promise<string>;
