// TypeScript interfaces for portfolio content

export interface Project {
  slug: string;
  title: string;
  category: 'Ideation' | 'MVP' | 'Feedback';
  description: string;
  thumbnail: string;
  featured: boolean;
  order: number;
  date?: string;
  figmaLink?: string;
  mvpLink?: string;
  slides?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category?: string;
  tags?: string[];
}

export interface WritingPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category?: string;
  featured?: boolean;
}
