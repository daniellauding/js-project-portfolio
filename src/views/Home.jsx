import { SkipLink } from '@/components/SkipLink'
import { Hero } from '@/components/Hero'
import { TechStack } from '@/components/TechStack'
import { Title } from '@/components/Typography'
import { Projects } from '@/components/Projects'
import { Articles } from '@/components/Articles'
import { Skills } from '@/components/Skills'
import { CV } from '@/components/CV'
import { Footer } from '@/components/Footer'
import aboutData from '@/data/about.json'
import stackData from '@/data/stack.json'
import projectsData from '@/data/projects.json'
import articlesData from '@/data/articles.json'
import skillsData from '@/data/skills.json'

export const Home = () => (
  <>
    <header id="header">
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#tech">Skip to technologies</SkipLink>
      <SkipLink href="#projects">Skip to projects</SkipLink>
      <SkipLink href="#articles">Skip to articles</SkipLink>
      <SkipLink href="#skills">Skip to skills</SkipLink>
      <SkipLink href="#cv">Skip to CV</SkipLink>
      <SkipLink href="#footer">Skip to contact</SkipLink>

      <Title as="h1" className="sr-only">
        Daniel Lauding - Frontend Developer Portfolio
      </Title>

      <Hero data={aboutData} />
    </header>
    <main id="main-content">
      <TechStack data={stackData} />
      <Projects data={projectsData} />
      <Articles data={articlesData} />
      <Skills data={skillsData} />
    </main>
    <Footer data={aboutData} />
  </>
)