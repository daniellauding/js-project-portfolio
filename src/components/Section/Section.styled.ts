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
  position: relative;

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

  ${props =>
    props.$variant === 'articles' &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 11px;
      background-image: url("data:image/svg+xml,%3Csvg width='175' height='11' viewBox='0 0 175 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.198 5.2453C8.07066 2.25157 13.7979 2.25157 18.3796 5.2453C22.9614 8.23904 28.6886 8.23904 35.5613 5.2453C42.434 2.25157 48.1612 2.25157 52.7429 5.2453C57.3247 8.23904 63.0519 8.23904 69.9246 5.2453C76.7973 2.25157 82.5245 2.25157 87.1062 5.2453C91.688 8.23904 97.4152 8.23904 104.288 5.2453C111.161 2.25157 116.888 2.25157 121.47 5.2453C126.051 8.23904 131.779 8.23904 138.651 5.2453C145.524 2.25157 151.251 2.25157 155.833 5.2453C160.415 8.23904 166.142 8.23904 173.014 5.2453' stroke='%23FF4575' stroke-width='5.99997'/%3E%3C/svg%3E");
      background-repeat: repeat-x;
      background-size: auto 11px;
      background-position: top center;
      pointer-events: none;
    }
  `}
`

export const Container = styled.div<StyledProps>`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  
  ${props => props.theme.media.desktop} {
    gap: var(--spacing-${props => props.$gap || 'xxl'});
    flex-direction: ${props => props.$flexDirection || 'column'};
  }

  ${props => props.$alignItems && `align-items: ${props.$alignItems};`}

  ${props => props.$justifyContent && `justify-content: ${props.$justifyContent};`}

  ${props => props.$layout === 'full' && `min-height: 100%;`}
`
