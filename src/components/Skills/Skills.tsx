import { Title } from '@/components/Typography'
import { Section } from '@/components/Section'
import { SkillsProps } from './Skills.types'
import {
  SkillsGrid,
  SkillCategory,
  CategoryHeader,
  CategoryTitle,
  SkillsList,
  SkillItem
} from './Skills.styled'

export const Skills = ({ data }: SkillsProps) => {
  if (!data) return null
  
  const skills = data?.skills
  if (!skills || !Array.isArray(skills) || skills.length === 0) return null

  const getCategoryClass = (category: string) => {
    const categoryLower = category.toLowerCase()
    if (categoryLower.includes('frontend') || categoryLower.includes('code')) return 'code'
    if (categoryLower.includes('backend') || categoryLower.includes('tool')) return 'toolbox'
    if (categoryLower.includes('upcoming')) return 'upcoming'
    return 'more'
  }

  return (
    <Section 
      variant="skills" 
      id="skills"
      aria-label="Technical skills and expertise"
    >
      <Title size="xl" style={{ color: 'white', textAlign: 'center' }}>Skills</Title>
      <SkillsGrid 
        role="list"
        aria-label={`${skills.length} skill categories`}
      >
        {skills.map((skill, index) => (
          <SkillCategory key={skill.category || index} role="listitem">
            <CategoryHeader className={getCategoryClass(skill.category)}>
              <CategoryTitle>{skill.category}</CategoryTitle>
            </CategoryHeader>
            {skill.items && skill.items.length > 0 && (
              <SkillsList 
                role="list"
                aria-label={`${skill.category} skills`}
              >
                {skill.items.map((item, itemIndex) => (
                  <SkillItem key={itemIndex} role="listitem">
                    {item}
                  </SkillItem>
                ))}
              </SkillsList>
            )}
          </SkillCategory>
        ))}
      </SkillsGrid>
    </Section>
  )
}