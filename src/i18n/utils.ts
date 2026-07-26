import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Extract the locale from a URL pathname (e.g. /id/blog -> 'id'). */
export function getLangFromUrl(url: URL): Lang {
  const [, seg] = url.pathname.split('/');
  if (seg in ui) return seg as Lang;
  return defaultLang;
}

/** Returns a translator bound to a locale, falling back to the default language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a locale-aware href. English (default) is unprefixed; Indonesian is /id/*.
 * `path` should start with '/'.
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path;
  return lang === defaultLang ? `/${clean}`.replace(/\/+/g, '/') : `/${lang}${clean}`.replace(/\/+$/, '') || `/${lang}`;
}

/** The opposite locale, for the language switcher. */
export function otherLang(lang: Lang): Lang {
  return lang === 'en' ? 'id' : 'en';
}
