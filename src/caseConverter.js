import Case from 'case'
import { titleCase } from 'title-case'
import { spongeCase } from 'sponge-case'
import { swapCase } from 'swap-case'

/** Transforms string to sentence case. */
export function toSentenceCase(str) {
  if (!str) return ''
  return Case.sentence(str)
}

/** Transforms string to lower case. */
export function toLowerCase(str) {
  return Case.lower(str)
}

/** Transforms string to upper case. */
export function toUpperCase(str) {
  return Case.upper(str)
}

/** Transforms string to capitalized case (Start Case). */
export function toCapitalizedCase(str) {
  if (!str) return ''
  return Case.capital(str)
}

/** Transforms string to alternating case (sPoNgEbOb CaSe). */
export function toAlternatingCase(str) {
  if (!str) return ''
  return spongeCase(str)
}

/** Transforms string to title case following standard English conventions. */
export function toTitleCase(str) {
  if (!str) return ''
  // Preserve existing line breaks: apply titleCase to each line separately
  return str.split('\n').map((line) => {
    if (line.trim() === '') return ''
    return titleCase(line)
  }).join('\n')
}

/** Inverts the case of each character (e.g., "Hello" -> "hELLO"). */
export function toInverseCase(str) {
  if (!str) return ''
  return swapCase(str)
}

/** Transforms string to slug case (kebab-case). */
export function toSlugCase(str) {
  if (!str) return ''
  return Case.kebab(str)
}
