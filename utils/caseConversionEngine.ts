import Case from 'https://esm.sh/case';
import { titleCase } from 'https://esm.sh/title-case';
import { spongeCase } from 'https://esm.sh/sponge-case';
import { swapCase } from 'https://esm.sh/swap-case';

/**
 * Transforms string to sentence case.
 * Capitalizes the first letter of the overall string.
 */
export const toSentenceCase = (str: string): string => {
  if (!str) return '';
  return Case.sentence(str);
};

/**
 * Transforms string to lower case.
 */
export const toLowerCase = (str: string): string => Case.lower(str);

/**
 * Transforms string to upper case.
 */
export const toUpperCase = (str: string): string => Case.upper(str);

/**
 * Transforms string to capitalized case (Start Case).
 * Capitalizes the first letter of every word.
 */
export const toCapitalizedCase = (str: string): string => {
  if (!str) return '';
  return Case.capital(str);
};

/**
 * Transforms string to alternating case (sPoNgEbOb CaSe) using the sponge-case package.
 */
export const toAlternatingCase = (str: string): string => {
  if (!str) return '';
  return spongeCase(str);
};

/**
 * Transforms string to title case using the title-case package, 
 * which follows standard English conventions (lowercase for articles, conjunctions, etc.).
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  return titleCase(str);
};

/**
 * Inverts the case of each character (e.g., "Hello" -> "hELLO") using swap-case.
 */
export const toInverseCase = (str: string): string => {
  if (!str) return '';
  return swapCase(str);
};

/**
 * Transforms string to slug case (kebab-case).
 * Useful for URLs and file names.
 */
export const toSlugCase = (str: string): string => {
  if (!str) return '';
  return Case.kebab(str);
};