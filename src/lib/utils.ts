/** Joins class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Returns true for absolute http(s) URLs. */
export function isExternalUrl(href: string): boolean {
  return /^https?:\/\//.test(href);
}
