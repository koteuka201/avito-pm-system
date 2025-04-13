export const isUndefined = <T>(value: T | null | undefined): value is undefined => {
  return value === undefined
}

export const isNullOrUndefined = <T>(value: T | null | undefined): value is null | undefined => {
  return value === null || isUndefined(value)
}
