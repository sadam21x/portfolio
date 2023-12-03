import type { Project } from '@/lib/types'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const projectsPath = path.join(process.cwd(), 'src/data/projects')

/**
 * Returns an array of project slugs by reading the contents of the projects directory.
 * @returns {Promise<string[]>} An array of project slugs.
 */
export async function getSlugs(): Promise<string[]> {
  try {
    const projects = fs.readdirSync(projectsPath)
    return projects.map((s) => s.replace('.mdx', ''))
  } catch (error) {
    return []
  }
}

/**
 * Finds a project by its slug.
 * @param slug - The slug of the project to find.
 * @returns A Promise that resolves to the Project object if found, or null if not found.
 */
export async function findProject(slug: string): Promise<Project | null> {
  try {
    const dir = path.join(projectsPath, `${slug}.mdx`)
    const source = fs.readFileSync(dir)
    const { content, data } = matter(source)
    
    return <Project>{
      ...data,
      slug,
      content,
    }
  } catch (error) {
    return null
  }
}

/**
 * Retrieves all projects from the file system.
 * @returns A Promise that resolves to an array of Project objects.
 */
export async function getProjects(): Promise<Project[]> {
  const projects = fs.readdirSync(projectsPath)

  return projects.reduce((allProjects: any, projectSlug: string) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'src/data/projects', projectSlug),
      'utf8',
    )

    const { content, data } = matter(source)

    return [
      {
        ...data,
        slug: projectSlug.replace('.mdx', ''),
        content,
      },
      ...allProjects,
    ]
  }, [])
}
