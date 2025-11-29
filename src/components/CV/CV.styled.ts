import styled from 'styled-components'

export const CVContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);

  h3 {
    margin-top: var(--spacing-xxl);
    margin-bottom: var(--spacing-lg);
    color: var(--title-color);
  }
`

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`

export const ExperienceItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xs);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }

  ${props => props.theme.media.tablet} {
    grid-template-columns: 200px 1fr;
    gap: var(--spacing-md);
  }
`

export const Company = styled.div`
  font-family: var(--title-font-family);
  font-weight: var(--weight-semibold);
  font-size: var(--text-lg);
  color: var(--text-color);
`

export const Role = styled.div`
  font-family: var(--text-font-family);
  font-weight: var(--weight-medium);
  font-size: var(--text-md);
  color: var(--title-color);
  margin-bottom: var(--spacing-xs);
`

export const Period = styled.div`
  font-family: var(--text-font-family);
  font-size: var(--text-sm);
  color: var(--text-muted);
  margin-bottom: var(--spacing-xs);
`

export const Description = styled.div`
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  color: var(--text-color);
  line-height: 1.6;
`

export const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`

export const EducationItem = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xs);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }

  ${props => props.theme.media.tablet} {
    grid-template-columns: 200px 1fr;
    gap: var(--spacing-md);
  }
`

export const School = styled.div`
  font-family: var(--title-font-family);
  font-weight: var(--weight-semibold);
  font-size: var(--text-lg);
  color: var(--text-color);
`

export const Program = styled.div`
  font-family: var(--text-font-family);
  font-weight: var(--weight-medium);
  font-size: var(--text-md);
  color: var(--title-color);
  margin-bottom: var(--spacing-xs);
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  ${props => props.theme.media.tablet} {
    flex-direction: row;
    gap: var(--spacing-xl);
  }
`

export const LinkItem = styled.a`
  font-family: var(--text-font-family);
  font-size: var(--text-lg);
  font-weight: var(--weight-medium);
  color: var(--title-color);
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  &:focus-visible {
    outline: 2px solid var(--title-color);
    outline-offset: 4px;
    border-radius: var(--radius-sm);
  }
`

export const ShowMoreButton = styled.button`
  background: none;
  border: 2px solid var(--title-color);
  color: var(--title-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  font-weight: var(--weight-medium);
  cursor: pointer;
  margin: var(--spacing-lg) auto;
  display: block;
  transition: all 0.2s ease;

  &:hover {
    background: var(--title-color);
    color: var(--bg-color);
  }

  &:focus-visible {
    outline: 2px solid var(--title-color);
    outline-offset: 4px;
  }
`