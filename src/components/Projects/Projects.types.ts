export interface Project {
  name: string
  description: string
  image: string
  tags: string[]
  netlify: string
  github: string
  date?: string
  codepen?: string
}

export interface ProjectsData {
  projects: Project[]
}

export interface ProjectsProps {
  data: ProjectsData
}

export interface ProjectCardProps {
  project: Project
}