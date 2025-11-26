export interface Skill {
  category: string
  items: string[]
}

export interface SkillsData {
  skills: Skill[]
}

export interface SkillsProps {
  data: SkillsData
}