/**
 * Transforms string to sentence case.
 * Capitalizes the first letter of each sentence.
 */
export const toSentenceCase = (str: string): string => {
  if (!str) return '';
  // Convert entire string to lower first
  const lower = str.toLowerCase();
  // Match sentences ending with . ! ? followed by space or end of line
  return lower.replace(/(^\s*\w|[\.\!\?]\s+\w)/g, (c) => c.toUpperCase());
};

export const toLowerCase = (str: string): string => str.toLowerCase();

export const toUpperCase = (str: string): string => str.toUpperCase();

/**
 * Transforms string to capitalized case.
 * Every word starts with a capital letter.
 */
export const toCapitalizedCase = (str: string): string => {
  if (!str) return '';
  return str.toLowerCase().split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

/**
 * Transforms string to alternating case (e.g., hElLo WoRlD).
 */
export const toAlternatingCase = (str: string): string => {
  if (!str) return '';
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      res += str[i].toLowerCase();
    } else {
      res += str[i].toUpperCase();
    }
  }
  return res;
};

/**
 * Transforms string to title case using common rules.
 */
export const toTitleCase = (str: string): string => {
  if (!str) return '';
  const articles = ['a', 'an', 'the', 'and', 'but', 'or', 'for', 'nor', 'on', 'at', 'to', 'from', 'by', 'of'];
  return str.toLowerCase().split(' ').map((word, index, words) => {
    if (index > 0 && index < words.length - 1 && articles.includes(word)) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');
};

/**
 * Inverts the case of each character in the string.
 */
export const toInverseCase = (str: string): string => {
  if (!str) return '';
  return str.split('').map(c => {
    if (c === c.toUpperCase()) return c.toLowerCase();
    if (c === c.toLowerCase()) return c.toUpperCase();
    return c;
  }).join('');
};

/**
 * Transforms string to slug case (kebab-case).
 */
export const toSlugCase = (str: string): string => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
};