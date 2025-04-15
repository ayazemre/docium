export function deepCopy<T extends Record<string, any>>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}
