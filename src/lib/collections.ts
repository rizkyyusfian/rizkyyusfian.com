import type { Lang } from '@i18n/ui';

/** A short note that may be written in one language or both. */
export type LocalizedText = string | Partial<Record<Lang, string>>;

export function localize(text: LocalizedText | undefined, lang: Lang): string | undefined {
  if (text == null) return undefined;
  if (typeof text === 'string') return text;
  return text[lang] ?? text.en ?? text.id;
}

export type CollectionStatus = 'now' | 'done' | 'want';

export interface CollectionItem {
  title: string;
  /** Author / director / studio / artist. */
  by?: string;
  year?: number | string;
  /** 1–5. */
  rating?: number;
  status?: CollectionStatus;
  note?: LocalizedText;
  /** External link (Goodreads, IMDb, Steam, Spotify, …). */
  link?: string;
}

export const statusLabel: Record<CollectionStatus, Record<Lang, string>> = {
  now: { en: 'current', id: 'sekarang' },
  done: { en: 'finished', id: 'selesai' },
  want: { en: 'backlog', id: 'antre' },
};
