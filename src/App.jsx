import { Header } from '@/components/Header'
import { Title, Text } from '@/components/Typography'
import { Section } from '@/components/Section'
import { Projects } from '@/components/Projects'
import aboutData from '@/data/about.json'
import stackData from '@/data/stack.json'
import projectsData from '@/data/projects.json'

console.log(projectsData);

export const App = () => {
  return (
    <>
      <Header
        intro={aboutData.intro}
        role={aboutData.role}
        desc={aboutData.desc}
        avatar_url={aboutData.avatar_url}
      />

      <Section fullWidth innerContainer title={stackData.title} text={stackData.desc} />

      <Projects data={projectsData} />

      <Title>Portfolio</Title>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, laborum! Maxime animi nostrum facilis distinctio neque labore consectetur beatae eum ipsum excepturi voluptatum, dicta repellendus incidunt fugiat, consequatur rem aperiam.</Text>
    </>
  )
}
