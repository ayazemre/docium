export function deepCopy<T extends Record<string, any>>(object: T): T {
  return object;
}
