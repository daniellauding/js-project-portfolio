import { Section } from '@/components/Section'
import { ArticleCard } from './ArticleCard'
import { ArticlesProps } from './Articles.types'
import { ArticlesContainer } from './Articles.styled'

export const Articles = ({ data }: ArticlesProps) => {
  if (!data) return null
  
  const articles = data?.articles
  if (!articles || !Array.isArray(articles) || articles.length === 0) return null

  return (
    <Section 
      variant="articles" 
      id="articles"
      aria-label="Recent articles and blog posts"
      title="My words"
      gap="xxl"
    >
      <ArticlesContainer 
        role="list"
        aria-label={`${articles.length} recent articles`}
      >
        {articles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article}
            role="listitem"
            aria-label={`Article: ${article.title}`}
          />
        ))}
      </ArticlesContainer>
    </Section>
  )
}