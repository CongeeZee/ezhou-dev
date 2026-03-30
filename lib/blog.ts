import { readFileSync, readdirSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface PostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  readingTime: string
  tags: string[]
}

export interface Post extends PostMeta {
  content: string
}

const postsDirectory = join(process.cwd(), 'content/blog')

function getPostSlugs(): string[] {
  if (!require('fs').existsSync(postsDirectory)) {
    return []
  }
  return readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getAllPosts(): PostMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getPostMeta(slug)).filter(Boolean) as PostMeta[]
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getPostMeta(slug: string): PostMeta | null {
  try {
    const filePath = join(postsDirectory, `${slug}.mdx`)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const readTime = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      readingTime: readTime.text,
      tags: data.tags || [],
    }
  } catch {
    return null
  }
}

export function getPost(slug: string): Post | null {
  try {
    const filePath = join(postsDirectory, `${slug}.mdx`)
    const fileContent = readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const readTime = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      readingTime: readTime.text,
      tags: data.tags || [],
      content,
    }
  } catch {
    return null
  }
}
