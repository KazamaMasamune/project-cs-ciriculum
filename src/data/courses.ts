import { Course } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to Programming',
    description: 'Learn the fundamentals of programming using Python. Cover basic syntax, data types, control structures, and functions.',
    level: 'Beginner',
    duration: '8 weeks',
    topics: ['Python', 'Variables', 'Control Flow', 'Functions', 'Basic Data Structures'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128',
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms. Learn about complexity analysis, sorting, searching, and graph algorithms.',
    level: 'Intermediate',
    duration: '12 weeks',
    topics: ['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Dynamic Programming'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=2126',
  },
  {
    id: '3',
    title: 'Web Development Fundamentals',
    description: 'Build modern web applications using HTML, CSS, and JavaScript. Learn responsive design and basic frontend frameworks.',
    level: 'Beginner',
    duration: '10 weeks',
    topics: ['HTML', 'CSS', 'JavaScript', 'React Basics', 'Web APIs'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2124',
  },
  {
    id: '4',
    title: 'Database Systems',
    description: 'Understand database design, SQL, and NoSQL databases. Learn about data modeling, normalization, and query optimization.',
    level: 'Intermediate',
    duration: '10 weeks',
    topics: ['SQL', 'Database Design', 'Normalization', 'Indexing', 'Transaction Management'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=2121',
  },
  {
    id: '5',
    title: 'Advanced Systems Programming',
    description: 'Deep dive into operating systems, memory management, and concurrent programming using C and Rust.',
    level: 'Advanced',
    duration: '14 weeks',
    topics: ['Operating Systems', 'Memory Management', 'Concurrency', 'System Architecture'],
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=2124',
  },
];