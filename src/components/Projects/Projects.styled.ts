import styled from 'styled-components'
import { Image } from '@/components/Image'

export const ProjectsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  padding: 0 0;
  margin: var(--spacing-md) auto 0 auto;

  ${props => props.theme.media.tablet} {
  }

  ${props => props.theme.media.desktop} {
    margin: var(--spacing-huge) auto 0 auto;
  }
`

export const TabsContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  flex-wrap: wrap;
`

export const ProjectDateBadge = styled.span`
  padding: 0px;
  width: fit-content;
`

export const ProjectCard = styled.article`
  background: var(--card-bg);
  border-radius: var(--radius-none);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.desktop} {
    flex-direction: row;
  }
`

export const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 408 / 280;
  overflow: hidden;
  border-left: 20px solid #E6DAC0;
  border-bottom: 20px solid #E6DAC0;
  ${props => props.theme.media.desktop} {
    width: 408px;
    max-width: 408px;
  }
`

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ProjectContent = styled.div`
  padding: var(--spacing-lg) 0;
  flex: 1;
  gap: var(--spacing-md);
  display: flex;
  flex-direction: column;
  ${props => props.theme.media.desktop} {
    padding: 0 var(--spacing-xl);
  }
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`

export const ProjectTag = styled.span`
  background: var(--text-color);
  color: var(--bg-color);
  padding: var(--spacing-xs) var(--spacing-xs);
  border-radius: var(--radius-none);
  font-size: var(--text-sm);
  font-family: var(--text-font-family);
`

export const ProjectActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-md);
`

export const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--title-color);
  text-decoration: none;
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  font-weight: var(--weight-medium);
  transition: opacity 0.2s ease, outline 0.2s ease;
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
  margin: calc(-1 * var(--spacing-xs));

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: 2px solid var(--title-color);
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--title-color);
    outline-offset: 2px;
  }
`