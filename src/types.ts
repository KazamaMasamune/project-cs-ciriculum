export interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  topics: string[];
  image: string;
}

export interface Track {
  id: string;
  title: string;
  description: string;
  courses: string[];
}