/** Shared theme constants (safe to import from Server and Client Components). */

export const COLOR_SCHEME_STORAGE_KEY = "color-scheme";
export const COLOR_SCHEME_SYSTEM = "light dark";

/**
 * Inline script placed immediately after <meta name="color-scheme"> in <head>.
 * Applies a stored override before first paint to prevent a theme flash.
 * If JS is disabled, the meta stays "light dark" and the OS preference is used.
 */
export const colorSchemeInitScript = `try{var s=localStorage.getItem("${COLOR_SCHEME_STORAGE_KEY}");if(s==="light"||s==="dark")document.querySelector('meta[name="color-scheme"]').content=s}catch(e){}`;
