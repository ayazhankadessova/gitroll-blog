import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { Post } from '#site/content'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1
    if (a.date < b.date) return 1
    return 0
  })
}

export function sortPostsByTitle(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
    return 0
  })
}

export function filterPostsBySearchTerm(
  posts: Array<Post>,
  searchTerm: string
): Array<Post> {
  if (!searchTerm) return posts

  const normalizedSearchTerm = searchTerm.toLowerCase().trim()

  return posts.filter((post) => {
    const { title, description, tags } = post
    const normalizedTitle = title.toLowerCase()
    const normalizedExcerpt = description?.toLowerCase()
    const normalizedTags = tags?.map((tag) => tag.toLowerCase())

    return (
      normalizedTitle.includes(normalizedSearchTerm) ||
      normalizedExcerpt?.includes(normalizedSearchTerm) ||
      normalizedTags?.some((tag) => tag.includes(normalizedSearchTerm))
    )
  })
}
