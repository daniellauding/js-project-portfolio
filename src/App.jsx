import { ThemeProvider } from 'styled-components'
import { theme } from '@/theme'
import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { Title, Text } from '@/components/Typography'
import { Section } from '@/components/Section'
import { Projects } from '@/components/Projects'
import { Articles } from '@/components/Articles'
import { Skills } from '@/components/Skills'
import { Footer } from '@/components/Footer'
import aboutData from '@/data/about.json'
import stackData from '@/data/stack.json'
import projectsData from '@/data/projects.json'
import articlesData from '@/data/articles.json'
import skillsData from '@/data/skills.json'
// import footerData from '@/data/footer.json'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Hero data={aboutData} />

      <TechStack data={stackData} />

      <Projects data={projectsData} />

      <Articles data={articlesData} />

      <Skills data={skillsData} />

      {/* <Footer data={footerData} /> */}

    </ThemeProvider>
  )
}
