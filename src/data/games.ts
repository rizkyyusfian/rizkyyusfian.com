import type { CollectionItem } from '@/lib/collections';

// Edit freely — this powers /collections/games.
export const games: CollectionItem[] = [
  { title: 'Hades II', by: 'Supergiant Games', year: 2024, rating: 5, status: 'now', note: { en: 'Early access, endlessly replayable.', id: 'Akses awal, seru diulang terus.' } },
  { title: 'Elden Ring', by: 'FromSoftware', year: 2022, rating: 5, status: 'done' },
  { title: 'The Legend of Zelda: Tears of the Kingdom', by: 'Nintendo', year: 2023, rating: 5, status: 'done' },
  { title: 'Balatro', by: 'LocalThunk', year: 2024, rating: 5, status: 'done' },
  { title: 'Silksong', by: 'Team Cherry', year: 'TBA', status: 'want', note: { en: 'Any day now…', id: 'Kapan pun sekarang…' } },
];
