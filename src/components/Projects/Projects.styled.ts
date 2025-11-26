import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  ${props => props.theme.media.tablet} {
  }

  ${props => props.theme.media.desktop} {
  }
`

export const ProjectCard = styled.article`
  background: white;
  border-radius: var(--radius-none);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: row;

  &:hover {
    transform: translateY(-4px);
  }
`

export const ProjectImage = styled.div<{ $backgroundImage: string }>`
  width: 408px;
  height: 280px;
  background-image: url(${props => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-left: 20px solid var(--section-projects-title-color);
  border-bottom: 20px solid var(--section-projects-title-color);
`

export const ProjectContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ProjectTitle = styled.h3`
  font-family: var(--title-font-family);
  font-size: var(--title-sm);
  font-weight: var(--weight-bold);
  color: var(--text-color) !important;
  margin: 0 0 var(--spacing-md) 0;
`

export const ProjectDescription = styled.p`
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  color: var(--text-color);
  line-height: 1.6;
  margin: 0 0 var(--spacing-lg) 0;
  flex: 1;
`

export const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
`

export const ProjectTag = styled.span`
  background: #000;
  color: #fff;
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