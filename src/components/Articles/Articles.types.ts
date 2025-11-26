export interface Article {
  id: string
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  link: string
  tags: string[]
}

export interface ArticlesData {
  articles: Article[]
}

export interface ArticlesProps {
  data: ArticlesData
}

export interface ArticleCardProps {
  article: Article
}