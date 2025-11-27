import { Icon } from '@/components/Icon'
import { Text, Title } from '@/components/Typography'
import { ArticleCardProps } from './Articles.types'
import {
  ArticleCard as Card,
  ArticleImage,
  StyledImage,
  ArticleContent,
  ArticleDate,
  ArticleTitle,
  ArticleExcerpt,
  ArticleFooter,
  ArticleLink
} from './Articles.styled'

export const ArticleCard = ({ article, ...props }: ArticleCardProps) => {
  if (!article) return null

  const { title, excerpt, date, image, link } = article

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
    <Card className="article-card" {...props}>
      {image && (
        <ArticleImage className="article-card__media">
          <StyledImage
            src={image}
            alt={`Screenshot of ${title || 'article'}`}
            className="article-card__image"
          />
        </ArticleImage>
      )}
      <ArticleContent className="article-card__content">
        {date && (
          <ArticleDate className="article-card__date">
            <Text size="sm" color="#fff" weight="light" className="article-card__date-text">
              {formatDate(date)}
            </Text>
          </ArticleDate>
        )}
        
        {title && (
          <Title size="md" weight="semibold" className="article-card__title" color="#000000" as="h3">
            {title}
          </Title>
        )}
        
        {excerpt && (
          <Text size="lg" weight="light" className="article-card__desc">
            {excerpt}
          </Text>
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