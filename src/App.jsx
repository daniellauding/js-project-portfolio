import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme'
import { SkipLink } from '@/components/SkipLink'
import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { Title } from '@/components/Typography'
import { Projects } from '@/components/Projects'
import { Articles } from '@/components/Articles'
import { Skills } from '@/components/Skills'
import aboutData from '@/data/about.json'
import stackData from '@/data/stack.json'
import projectsData from '@/data/projects.json'
import articlesData from '@/data/articles.json'
import skillsData from '@/data/skills.json'
// import footerData from '@/data/footer.json'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#tech">Skip to technologies</SkipLink>
      <SkipLink href="#projects">Skip to projects</SkipLink>
      <SkipLink href="#articles">Skip to articles</SkipLink>
      <SkipLink href="#skills">Skip to skills</SkipLink>
      <SkipLink href="#footer">Skip to contact</SkipLink>

      <Title as="h1" className="sr-only">
        Daniel Lauding - Frontend Developer Portfolio
      </Title>
      
      <main id="main-content">
        <Hero data={aboutData} />
        <TechStack data={stackData} />
        <Projects data={projectsData} />
        <Articles data={articlesData} />
        <Skills data={skillsData} />
      </main>

      {/* <Footer data={footerData} /> */}

    </ThemeProvider>
  )
}
