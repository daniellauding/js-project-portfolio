import styled from 'styled-components'
import { Image } from '@/components/Image'

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
  }
`

export const ArticleCard = styled.article`
  background: transparent;
  border-radius: var(--radius-none);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
  }
`

export const ArticleImage = styled.div`
  position: relative;
  width: 408px;
  max-width: 408px;
  aspect-ratio: 408 / 280;
  overflow: hidden;
  border-left: 20px solid var(--section-articles-title-color);
  border-bottom: 20px solid var(--section-articles-title-color);
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ArticleContent = styled.div`
  padding: var(--spacing-none);
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ArticleDate = styled.div`
  background: #000;
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-family: var(--text-font-family);
  font-weight: var(--weight-medium);
  width: fit-content;
  margin-bottom: var(--spacing-md);
`

export const ArticleFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-md);
`

export const ArticleReadTime = styled.span`
  font-family: var(--text-font-family);
  font-size: var(--text-sm);
  color: var(--section-articles-text-color);
  opacity: 0.7;
`

export const ArticleLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--section-articles-title-color);
  text-decoration: none;
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  font-weight: var(--weight-medium);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px solid var(--section-articles-title-color);
    outline-offset: 2px;
  }
`