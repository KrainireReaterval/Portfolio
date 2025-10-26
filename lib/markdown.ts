import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export interface ProjectFrontmatter {
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  description: string;
  figmaLink?: string;
  mvpLink?: string;
  slides?: number;
  order?: number;
  featured?: boolean;
  date?: string;
}

export interface WritingFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  category?: string;
  featured?: boolean;
}

export interface KnowledgeFrontmatter {
  title: string;
  slug: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
}

export interface MarkdownContent<T> {
  frontmatter: T;
  content: string;
  slug: string;
}

/**
 * Get all markdown files from a specific content type directory
 */
export async function getContentByType<T>(
  type: 'projects' | 'knowledge' | 'writing'
): Promise<MarkdownContent<T>[]> {
  const typeDirectory = path.join(contentDirectory, type);

  // Create directory if it doesn't exist
  if (!fs.existsSync(typeDirectory)) {
    fs.mkdirSync(typeDirectory, { recursive: true });
    return [];
  }

  const files = fs.readdirSync(typeDirectory);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const content = await Promise.all(
    markdownFiles.map(async (filename) => {
      const filePath = path.join(typeDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      const slug = filename.replace(/\.md$/, '');

      return {
        frontmatter: data as T,
        content,
        slug,
      };
    })
  );

  return content;
}

/**
 * Get a single markdown file by slug and type
 */
export async function getContentBySlug<T>(
  type: 'projects' | 'knowledge' | 'writing',
  slug: string
): Promise<MarkdownContent<T> | null> {
  const typeDirectory = path.join(contentDirectory, type);
  const filePath = path.join(typeDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data as T,
    content,
    slug,
  };
}

/**
 * Convert markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

/**
 * Get all projects sorted by order and date
 */
export async function getAllProjects(): Promise<
  MarkdownContent<ProjectFrontmatter>[]
> {
  const projects = await getContentByType<ProjectFrontmatter>('projects');

  return projects.sort((a, b) => {
    // Sort by order if available, otherwise by date
    if (a.frontmatter.order !== undefined && b.frontmatter.order !== undefined) {
      return a.frontmatter.order - b.frontmatter.order;
    }
    return 0;
  });
}

/**
 * Get featured projects
 */
export async function getFeaturedProjects(): Promise<
  MarkdownContent<ProjectFrontmatter>[]
> {
  const projects = await getAllProjects();
  return projects.filter((project) => project.frontmatter.featured);
}

/**
 * Get all writing posts sorted by date
 */
export async function getAllWriting(): Promise<
  MarkdownContent<WritingFrontmatter>[]
> {
  const writing = await getContentByType<WritingFrontmatter>('writing');

  return writing.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get all knowledge posts sorted by date
 */
export async function getAllKnowledge(): Promise<
  MarkdownContent<KnowledgeFrontmatter>[]
> {
  const knowledge = await getContentByType<KnowledgeFrontmatter>('knowledge');

  return knowledge.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}
