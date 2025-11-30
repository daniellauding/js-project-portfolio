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
  padding: var(--spacing-xl) var(--spacing-xl);

  &.section--cv {
    padding: 0;
  }

  ${props => props.theme.media.desktop} {
    padding: var(--spacing-xl) var(--spacing-xl);
  }

  ${props => props.theme.media.desktop} {
    padding: var(--spacing-huge) 20px;
  }
  
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
      top: -5px;
      left: 0;
      right: 0;
      height: 11px;
      background-image: url("data:image/svg+xml,%3Csvg width='175' height='11' viewBox='0 0 175 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M137.453 2.49477C144.875 -0.738314 151.752 -1.00455 157.474 2.73403C160.915 4.98284 167.89 5.24901 174.213 2.49477V7.99575C166.791 11.2288 159.914 11.4949 154.192 7.75649C150.751 5.50764 146.173 5.24137 139.85 7.99575C132.428 11.2288 125.551 11.4949 119.829 7.75649C116.387 5.50764 111.809 5.24137 105.486 7.99575C98.0643 11.2288 91.1875 11.4949 85.4658 7.75649C82.0241 5.50764 77.4462 5.24137 71.123 7.99575C63.701 11.2288 56.8243 11.4949 51.1025 7.75649C47.6608 5.50764 43.0829 5.24137 36.7598 7.99575C29.3377 11.2288 22.461 11.4949 16.7393 7.75649C13.2975 5.50764 6.32316 5.24137 0 7.99575V2.49477C7.42215 -0.738323 14.2987 -1.00459 20.0205 2.73403C23.4622 4.98285 28.0402 5.24904 34.3633 2.49477C41.7854 -0.738321 48.662 -1.00458 54.3838 2.73403C57.8255 4.98285 62.4035 5.24903 68.7266 2.49477C76.1487 -0.738319 83.0253 -1.00457 88.7471 2.73403C92.1888 4.98285 96.7668 5.24903 103.09 2.49477C110.512 -0.738316 117.389 -1.00456 123.11 2.73403C126.552 4.98284 131.13 5.24902 137.453 2.49477Z' fill='%2357B99B'/%3E%3C/svg%3E");
      background-repeat: repeat-x;
      background-size: 175px 11px;
      background-position: 0 top;
      pointer-events: none;
    }
    
    [data-theme="dark"] & {
      &::before {
        display: none;
      }
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
    gap: var(--spacing-xxl);
    flex-direction: ${props => props.$flexDirection || 'column'};
  }

  ${props => props.$alignItems && `align-items: ${props.$alignItems};`}

  ${props => props.$justifyContent && `justify-content: ${props.$justifyContent};`}

  ${props => props.$layout === 'full' && `min-height: 100%;`}
`
