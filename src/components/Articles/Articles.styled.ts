import styled from 'styled-components'
import { Image } from '@/components/Image'

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${props => props.theme.media.desktop} {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    // padding: 0 var(--spacing-lg);
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
  width: 100%;
  max-width: 100%;
  aspect-ratio: 408 / 280;
  overflow: hidden;
  border-left: 20px solid var(--section-articles-title-color);
  border-bottom: 20px solid var(--section-articles-title-color);
  ${props => props.theme.media.desktop} {
    // width: 408px;
    // max-width: 408px;
  }
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
  gap: var(--spacing-lg);
`

export const ArticleDate = styled.div`
  background: var(--tag-bg-color);
  color: var(--tag-text-color);
  padding: 0 var(--spacing-xs) 0px var(--spacing-xs);
  height: 24px;
  border-radius: 0;
  font-size: var(--text-md);
  font-family: var(--text-font-family);
  font-weight: var(--weight-medium);
  width: fit-content;
  margin-top: var(--spacing-lg);
  margin-bottom: -16px;
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
  gap: var(--spacing-md);
  color: var(--text-color);
  text-decoration: none;
  font-family: var(--text-font-family);
  font-size: var(--text-xl);
  font-weight: var(--weight-medium);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: 9999px;
  transition: opacity 0.2s ease;
  background: #fff;
  height: 48px;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px solid var(--section-articles-title-color);
    outline-offset: 2px;
  }
`