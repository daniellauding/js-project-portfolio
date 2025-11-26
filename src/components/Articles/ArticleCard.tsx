import { Icon } from '@/components/Icon'
import { ArticleCardProps } from './Articles.types'
import {
  ArticleCard as Card,
  ArticleImage,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  ArticleExcerpt,
  ArticleFooter,
  ArticleReadTime,
  ArticleLink
} from './Articles.styled'

export const ArticleCard = ({ article, ...props }: ArticleCardProps) => {
  if (!article) return null

  const { title, excerpt, date, image, readTime, link } = article

  const hasContent = title || excerpt || image
  if (!hasContent) return null

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    })
  }

  return (
    <Card role="article" {...props}>
      {image && (
        <ArticleImage 
          $backgroundImage={image} 
          role="img"
          aria-label={`Screenshot of ${title || 'article'}`}
        />
      )}
      <ArticleContent>
        {date && (
          <ArticleDate>
            {formatDate(date)}
          </ArticleDate>
        )}
        
        {title && (
          <ArticleTitle>
            {title}
          </ArticleTitle>
        )}
        
        {excerpt && (
          <ArticleExcerpt>
            {excerpt}
          </ArticleExcerpt>
        )}

      </ArticleContent>
      <ArticleFooter>        
        {link && (
          <ArticleLink 
            href={link}
            aria-label={`Read article: ${title}`}
          >
            <Icon name="Doc" />
            Read article
          </ArticleLink>
        )}
      </ArticleFooter>
    </Card>
  )
}