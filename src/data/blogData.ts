import posts from './posts.json';

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  description: string;
  content: string;
}

export const blogData: BlogPost[] = posts as BlogPost[];
