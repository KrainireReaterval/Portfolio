import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost } from './types';

const blogDirectory = path.join(process.cwd(), 'content/knowledge');

/**
 * Get the latest blog post for homepage preview
 * Returns the most recent post sorted by date
 */
export async function getLatestBlogPost(): Promise<BlogPost | null> {
  try {
    // Check if directory exists
    if (!fs.existsSync(blogDirectory)) {
      console.warn('Knowledge directory does not exist:', blogDirectory);
      return null;
    }

    const files = fs.readdirSync(blogDirectory);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in knowledge directory');
      return null;
    }

    const posts: BlogPost[] = [];

    for (const filename of markdownFiles) {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      // Extract excerpt from content (first paragraph or use frontmatter excerpt)
      const excerpt = data.excerpt || extractExcerpt(content);

      posts.push({
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        excerpt,
        category: data.category,
        tags: data.tags,
      });
    }

    // Sort by date (newest first) and return the first one
    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    return sortedPosts[0] || null;
  } catch (error) {
    console.error('Error fetching latest blog post:', error);
    return null;
  }
}

/**
 * Extract excerpt from markdown content
 * Takes first paragraph or first 200 characters
 */
function extractExcerpt(content: string): string {
  // Remove markdown headings and extra whitespace
  const cleaned = content
    .replace(/^#+ .+$/gm, '') // Remove headings
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();

  // Get first paragraph or first 200 characters
  const firstParagraph = cleaned.split('\n\n')[0];
  const excerpt = firstParagraph.length > 200
    ? firstParagraph.slice(0, 200) + '...'
    : firstParagraph;

  return excerpt || 'No excerpt available';
}

/**
 * Get all blog posts
 * Returns all posts sorted by date (newest first)
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    if (!fs.existsSync(blogDirectory)) {
      return [];
    }

    const files = fs.readdirSync(blogDirectory);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const posts: BlogPost[] = [];

    for (const filename of markdownFiles) {
      const filePath = path.join(blogDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      const excerpt = data.excerpt || extractExcerpt(content);

      posts.push({
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        excerpt,
        category: data.category,
        tags: data.tags,
      });
    }

    return posts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
  } catch (error) {
    console.error('Error fetching all blog posts:', error);
    return [];
  }
}
