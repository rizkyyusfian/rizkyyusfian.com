import type { CollectionItem } from '@/lib/collections';

// Edit freely — this powers /collections/books.
export const books: CollectionItem[] = [
  { title: 'The Pragmatic Programmer', by: 'Hunt & Thomas', year: 2019, rating: 5, status: 'now', note: { en: 'Re-reading the 20th-anniversary edition.', id: 'Membaca ulang edisi 20 tahun.' } },
  { title: 'Designing Data-Intensive Applications', by: 'Martin Kleppmann', year: 2017, rating: 5, status: 'now' },
  { title: 'Clean Architecture', by: 'Robert C. Martin', year: 2017, rating: 4, status: 'done' },
  { title: 'Atomic Habits', by: 'James Clear', year: 2018, rating: 4, status: 'done' },
  { title: 'Deep Learning', by: 'Goodfellow et al.', year: 2016, rating: 4, status: 'want' },
];
