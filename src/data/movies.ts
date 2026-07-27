import type { CollectionItem } from '@/lib/collections';

// Edit freely — this powers /collections/movie.
export const movies: CollectionItem[] = [
  { title: 'Dune: Part Two', by: 'Denis Villeneuve', year: 2024, rating: 5, status: 'done', note: { en: 'Seen it three times.', id: 'Sudah nonton tiga kali.' } },
  { title: 'Oppenheimer', by: 'Christopher Nolan', year: 2023, rating: 5, status: 'done' },
  { title: 'Spider-Man: Across the Spider-Verse', by: 'Sony Animation', year: 2023, rating: 5, status: 'done' },
  { title: 'The Wild Robot', by: 'Chris Sanders', year: 2024, rating: 4, status: 'done' },
  { title: 'Interstellar', by: 'Christopher Nolan', year: 2014, rating: 5, status: 'done' },
];
