export const propEq = <T extends Record<string, unknown>>(
  prop: keyof T,
  value: unknown
) => (object: T) => object[prop] === value;
