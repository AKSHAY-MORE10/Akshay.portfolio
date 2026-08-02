import posts from './posts.json'

export interface BlogPost {
  title: string
  slug: string
  description: string
  publishedDate: string
  readingTime: string
  category: string
  tags: string[]
  coverImage: string
  content: string
  author: string
  featured?: boolean
}

const blogPosts = [...(posts as BlogPost[])].sort(
  (left, right) => Date.parse(right.publishedDate) - Date.parse(left.publishedDate),
)

export function getBlogPosts() {
  return blogPosts
}

export function getFeaturedBlogPost() {
  return blogPosts.find((post) => post.featured) ?? blogPosts[0]
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAdjacentBlogPosts(slug: string) {
  const currentIndex = blogPosts.findIndex((post) => post.slug === slug)

  return {
    previous: currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined,
    next:
      currentIndex >= 0 && currentIndex < blogPosts.length - 1
        ? blogPosts[currentIndex + 1]
        : undefined,
  }
}

export function formatBlogDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}

export function slugifyHeading(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/["']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getBlogSearchIndex(post: BlogPost) {
  return [post.title, post.description, post.category, post.tags.join(' '), post.content]
    .join(' ')
    .toLowerCase()
}

export function extractBlogHeadings(content: string) {
  return content
    .split('\n')
    .map((line) => line.match(/^(#{1,4})\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      depth: match[1].length,
      text: match[2].trim(),
      id: slugifyHeading(match[2]),
    }))
}
