export type Project = {
  title: string
  slug: string
  order: number
  featured: boolean
  org: {
    name: string
    url: string
  }
  url?: string
  repository?: string
  description: string
  content: string
  tags: {
    name: string
    color: string
  }[]
}
