export interface Book {
  title: string;
  author: string;
  year?: number;
  category: string;
  notes?: string;
  rating?: 1 | 2 | 3 | 4 | 5;
  link?: string;
}

export const books: Book[] = [
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas, Andrew Hunt',
    year: 1999,
    category: 'Software Engineering',
    notes: 'Essential reading for any developer. Timeless advice on writing better code and building a career.',
    rating: 5,
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    year: 2008,
    category: 'Software Engineering',
    notes: 'Transformed how I think about naming, functions, and code organization.',
    rating: 5,
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    year: 2017,
    category: 'Systems',
    notes: 'The best book on distributed systems fundamentals. Brilliant depth.',
    rating: 5,
  },
  {
    title: 'Deep Learning',
    author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
    year: 2016,
    category: 'Machine Learning',
    notes: 'The foundational ML textbook. Dense but comprehensive.',
    rating: 4,
  },
  {
    title: 'The Algorithm Design Manual',
    author: 'Steven Skiena',
    year: 2008,
    category: 'Algorithms',
    notes: 'Best practical algorithms book I\'ve read. War stories section is gold.',
    rating: 5,
  },
];
