import styled from 'styled-components'

export const CVContainer = styled.div`
  margin: 0 auto;
  // padding: 0 var(--spacing-lg);

  .cv__title {
    margin-top: var(--spacing-xxl);
    margin-bottom: var(--spacing-lg);
    color: var(--title-color);

    &:first-child {
      margin-top: 0;
    }
  }

  .cv__company-link,
  .cv__school-link {
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-xs);
    transition: all 0.2s ease;
    border-radius: var(--radius-xs);
    position: relative;

    &:hover {
      color: ${props => props.theme.colors.primary};
      text-decoration: underline;
      text-decoration-color: ${props => props.theme.colors.primary};
      text-underline-offset: 3px;
    }

    &:focus-visible {
      outline: 2px solid ${props => props.theme.colors.primary};
      outline-offset: 2px;
    }

    &::after {
      content: '↗';
      font-size: 0.75em;
      opacity: 0.6;
      margin-left: 2px;
      transition: all 0.2s ease;
    }

    &:hover::after {
      opacity: 1;
      transform: translateX(1px) translateY(-1px);
    }
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
  padding-bottom: var(--spacing-xl);

  ${props => props.theme.media.desktop} {
    grid-template-columns: 180px 1fr;
    grid-column-gap: var(--spacing-huge);
  }
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
  padding-bottom: var(--spacing-xl);

  ${props => props.theme.media.desktop} {
    grid-template-columns: 180px 1fr;
    grid-column-gap: var(--spacing-huge);
  }
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


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: var(--spacing-lg) 0;
`