import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from './types';

const projectsDirectory = path.join(process.cwd(), 'content/projects');

/**
 * Get all featured projects for homepage
 * Returns top 3 projects where featured === true, sorted by order
 */
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    // Check if directory exists
    if (!fs.existsSync(projectsDirectory)) {
      console.warn('Projects directory does not exist:', projectsDirectory);
      return [];
    }

    const files = fs.readdirSync(projectsDirectory);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    if (markdownFiles.length === 0) {
      console.warn('No markdown files found in projects directory');
      return [];
    }

    const projects: Project[] = [];

    for (const filename of markdownFiles) {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      // Only include featured projects
      if (data.featured === true) {
        projects.push({
          slug: data.slug || filename.replace(/\.md$/, ''),
          title: data.title || 'Untitled Project',
          category: data.category || 'MVP',
          description: data.description || '',
          thumbnail: data.thumbnail || '/assets/images/projects/placeholder.webp',
          featured: data.featured,
          order: data.order || 999,
          date: data.date,
          figmaLink: data.figmaLink,
          mvpLink: data.mvpLink,
          slides: data.slides,
        });
      }
    }

    // Sort by order (ascending) and return top 3
    return projects
      .sort((a, b) => a.order - b.order)
      .slice(0, 3);
  } catch (error) {
    console.error('Error fetching featured projects:', error);
    return [];
  }
}

/**
 * Get all projects
 * Returns all projects sorted by order
 */
export async function getAllProjects(): Promise<Project[]> {
  try {
    if (!fs.existsSync(projectsDirectory)) {
      return [];
    }

    const files = fs.readdirSync(projectsDirectory);
    const markdownFiles = files.filter((file) => file.endsWith('.md'));

    const projects: Project[] = [];

    for (const filename of markdownFiles) {
      const filePath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);

      projects.push({
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled Project',
        category: data.category || 'MVP',
        description: data.description || '',
        thumbnail: data.thumbnail || '/assets/images/projects/placeholder.webp',
        featured: data.featured || false,
        order: data.order || 999,
        date: data.date,
        figmaLink: data.figmaLink,
        mvpLink: data.mvpLink,
        slides: data.slides,
      });
    }

    return projects.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error fetching all projects:', error);
    return [];
  }
}
