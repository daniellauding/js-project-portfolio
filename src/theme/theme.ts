export const theme = {
  // Fonts
  fonts: {
    title: 'var(--title-font-family)',
    text: 'var(--text-font-family)',
  },

  // Font sizes - Title
  titleSizes: {
    xs: 'var(--title-xs)', // 20px
    sm: 'var(--title-sm)', // 24px
    md: 'var(--title-md)', // 32px
    lg: 'var(--title-lg)', // 40px
    xl: 'var(--title-xl)', // 48px
    xxl: 'var(--title-xxl)', // 56px
    huge: 'var(--title-huge)', // 80px
  },

  // Font sizes - Text
  textSizes: {
    xs: 'var(--text-xs)', // 12px
    sm: 'var(--text-sm)', // 14px
    md: 'var(--text-md)', // 16px
    lg: 'var(--text-lg)', // 18px
    xl: 'var(--text-xl)', // 20px
    xxl: 'var(--text-xxl)', // 24px
    huge: 'var(--text-huge)', // 32px
  },

  // Font weights
  weights: {
    normal: 'var(--weight-normal)', // 400
    medium: 'var(--weight-medium)', // 500
    semibold: 'var(--weight-semibold)', // 600
    bold: 'var(--weight-bold)', // 700
  },

  // Base colors
  colors: {
    bg: 'var(--bg-color)',
    title: 'var(--title-color)',
    text: 'var(--text-color)',
    primary: 'var(--title-color)',
    secondary: 'var(--color-secondary)',
    tertiary: 'var(--color-tertiary)',
    icon: 'var(--color-icon)',
  },

  // Section variants
  sections: {
    hero: {
      bg: 'var(--section-hero-bg-color)',
      title: 'var(--section-hero-title-color)',
      text: 'var(--section-hero-text-color)',
    },
    tech: {
      bg: 'var(--section-tech-bg-color)',
      title: 'var(--section-tech-title-color)',
      text: 'var(--section-tech-text-color)',
    },
    projects: {
      bg: 'var(--section-projects-bg-color)',
      title: 'var(--section-projects-title-color)',
      text: 'var(--section-projects-text-color)',
    },
    articles: {
      bg: 'var(--section-articles-bg-color)',
      title: 'var(--section-articles-title-color)',
      text: 'var(--section-articles-text-color)',
    },
    skills: {
      bg: 'var(--section-skills-bg-color)',
      title: 'var(--section-skills-title-color)',
      text: 'var(--section-skills-text-color)',
    },
    footer: {
      bg: 'var(--section-footer-bg-color)',
      title: 'var(--section-footer-title-color)',
      text: 'var(--section-footer-text-color)',
    },
  },

  // Spacing - references CSS variables
  spacing: {
    xs: 'var(--spacing-xs)', // 4px
    sm: 'var(--spacing-sm)', // 8px
    md: 'var(--spacing-md)', // 16px
    lg: 'var(--spacing-lg)', // 24px
    xl: 'var(--spacing-xl)', // 32px
    xxl: 'var(--spacing-xxl)', // 48px
  },

  // Border radius - references CSS variables
  radius: {
    sm: 'var(--radius-sm)', // 4px
    md: 'var(--radius-md)', // 8px
    lg: 'var(--radius-lg)', // 12px
    round: 'var(--radius-round)', // 50%
  },

  // Breakpoints for responsive design
  breakpoints: {
    mobile: 'var(--breakpoint-mobile)', // 480px
    tablet: 'var(--breakpoint-tablet)', // 768px
    desktop: 'var(--breakpoint-desktop)', // 1024px
    wide: 'var(--breakpoint-wide)', // 1200px
  },

  // Media query helpers (easy to use in styled-components!)
  media: {
    mobile: `@media (min-width: 480px)`,
    tablet: `@media (min-width: 768px)`,
    desktop: `@media (min-width: 1024px)`,
    wide: `@media (min-width: 1200px)`,
    // Max-width queries (mobile-first approach alternative)
    maxMobile: `@media (max-width: 479px)`,
    maxTablet: `@media (max-width: 767px)`,
    maxDesktop: `@media (max-width: 1023px)`,
  },
}

// ============================================
// TypeScript Magic Explained Simply! 🎓
// ============================================

// This line creates a TYPE based on the theme object above
// "typeof theme" means: "Look at the theme object and create a type that matches its shape"
export type Theme = typeof theme

// Why? So TypeScript knows what props.theme looks like!
// Now when you type props.theme., you get autocomplete! ✨

// ============================================
// Helper Function (Optional - You Can Delete This!)
// ============================================

// This function lets you get theme values using a string path
// Example: getThemeValue('colors.primary') → returns 'var(--title-color)'
// But you probably won't use this - props.theme.colors.primary is easier!
export const getThemeValue = (path: string): string | undefined => {
  // Split 'colors.primary' into ['colors', 'primary']
  const keys = path.split('.')

  // Start with the full theme object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = theme

  // Walk through each key: theme → theme.colors → theme.colors.primary
  for (const key of keys) {
    value = value[key]
    if (value === undefined) return undefined
  }

  return value
}
