import { isEmptyString, isNullOrUndefined } from './'

export const generateLinkWithId = <T extends string | undefined>(
  reserveURL: T,
  start: string,
  end: string | null,
  id?: string | number | null | undefined
) => {
  if ((typeof id === 'string' && isEmptyString(id)) || isNullOrUndefined(id)) return reserveURL
  let generatedLink = `${start}/${id}`

  if (!isEmptyString(end)) {
    generatedLink = `${generatedLink}/${end}`
  }

  return generatedLink
}
