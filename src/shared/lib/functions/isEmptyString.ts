export function isEmptyString(str: string | null | undefined): str is undefined | null {
  return str === undefined || str === null || str.trim().length === 0
}
