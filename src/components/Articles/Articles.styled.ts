import styled from 'styled-components'

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

export const ArticleImage = styled.div<{ $backgroundImage: string }>`
  width: 408px;
  height: 280px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-left: 20px solid var(--section-articles-title-color);
  border-bottom: 20px solid var(--section-articles-title-color);
`

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

export const ArticleTitle = styled.h3`
  font-family: var(--title-font-family);
  font-size: var(--title-sm);
  font-weight: var(--weight-bold);
  color: var(--text-color) !important;
  margin: 0 0 var(--spacing-md) 0;
`

export const ArticleExcerpt = styled.p`
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  color: var(--text-color);
  line-height: 1.6;
  margin: 0 0 var(--spacing-lg) 0;
  flex: 1;
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