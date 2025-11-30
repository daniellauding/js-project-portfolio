import { Text, Title } from '@/components/Typography'
import { Button } from '@/components/Button'
import { useTheme } from '@/contexts/ThemeContext'
import { ArticleCardProps } from './Articles.types'
import {
  ArticleCard as Card,
  ArticleImage,
  StyledImage,
  ArticleContent,
  ArticleDate,
  ArticleFooter
} from './Articles.styled'

export const ArticleCard = ({ article, role, ...props }: ArticleCardProps) => {
  const { theme } = useTheme()
  
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
    <Card className="article-card" role={role} {...props}>
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
            <Text size="md" color="#fff" weight="light" className="article-card__date-text">
              {formatDate(date)}
            </Text>
          </ArticleDate>
        )}
        
        {title && (
          <Title size="md" weight="semibold" className="article-card__title" color={theme === 'dark' ? '#fff' : '#000'} as="h3">
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
          <Button
            href={link}
            variant="tertiary"
            size="lg"
            icon="Doc"
            ariaLabel={`Read article: ${title}`}
          >
            Read article
          </Button>
        )}
      </ArticleFooter>
    </Card>
  )
}