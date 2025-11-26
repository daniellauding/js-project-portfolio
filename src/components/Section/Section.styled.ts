import styled from 'styled-components'

const variants = {
  default: {
    bg: 'var(--bg-color)',
    titleColor: 'var(--title-color)',
    textColor: 'var(--text-color)',
  },
  hero: {
    bg: 'var(--section-hero-bg-color)',
    titleColor: 'var(--section-hero-title-color)',
    textColor: 'var(--section-hero-text-color)',
  },
  tech: {
    bg: 'var(--section-tech-bg-color)',
    titleColor: 'var(--section-tech-title-color)',
    textColor: 'var(--section-tech-text-color)',
  },
  projects: {
    bg: 'var(--section-projects-bg-color)',
    titleColor: 'var(--section-projects-title-color)',
    textColor: 'var(--section-projects-text-color)',
  },
  articles: {
    bg: 'var(--section-articles-bg-color)',
    titleColor: 'var(--section-articles-title-color)',
    textColor: 'var(--section-articles-text-color)',
  },
  skills: {
    bg: 'var(--section-skills-bg-color)',
    titleColor: 'var(--section-skills-title-color)',
    textColor: 'var(--section-skills-text-color)',
  },
  footer: {
    bg: 'var(--section-footer-bg-color)',
    titleColor: 'var(--section-footer-title-color)',
    textColor: 'var(--section-footer-text-color)',
  },
}

type StyledProps = {
  $variant?: string
  $layout?: string
  $flexDirection?: string
  $alignItems?: string
  $justifyContent?: string
  $gap?: string
}

export const StyledSection = styled.section<StyledProps>`
  width: 100%;
  padding: 40px 20px;
  background: ${props =>
    variants[props.$variant as keyof typeof variants]?.bg || variants.default.bg};

  ${props =>
    props.$layout === 'full' &&
    `
    min-height: 100vh;
    display: flex;
  `}

  ${props => props.$justifyContent && `justify-content: ${props.$justifyContent};`}

  ${props =>
    props.$variant &&
    variants[props.$variant as keyof typeof variants] &&
    `
    h1, h2, h3, h4, h5, h6 {
      color: ${variants[props.$variant as keyof typeof variants].titleColor};
    }
    p {
      color: ${variants[props.$variant as keyof typeof variants].textColor};
    }
  `}
`

export const Container = styled.div<StyledProps>`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;

  gap: var(--spacing-${props => props.$gap || 'md'});

  flex-direction: ${props => props.$flexDirection || 'column'};

  ${props => props.$alignItems && `align-items: ${props.$alignItems};`}

  ${props => props.$justifyContent && `justify-content: ${props.$justifyContent};`}

  ${props => props.$layout === 'full' && `min-height: 100%;`}
`
