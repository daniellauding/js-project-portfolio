import { useState } from 'react'
import { Section } from '@/components/Section'
import { Title, Text } from '@/components/Typography'
import { 
  CVContainer, 
  ExperienceList, 
  ExperienceItem, 
  Company, 
  Role, 
  Period,
  Description,
  EducationList,
  EducationItem,
  School,
  Program,
  LinksContainer,
  LinkItem,
  ShowMoreButton
} from './CV.styled'
import cvData from '@/data/cv.json'

export const CV = () => {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllEducation, setShowAllEducation] = useState(false)
  
  const visibleExperience = showAllExperience ? cvData.experience : cvData.experience.slice(0, 3)
  const visibleEducation = showAllEducation ? cvData.education : cvData.education.slice(0, 3)

  return (
    <Section variant="cv" id="cv">
      <CVContainer>
        <Title level={2} align="center">Experience & Education</Title>
        
        <ExperienceList>
          {visibleExperience.map((job, index) => (
            <ExperienceItem key={index}>
              <Company>{job.company}</Company>
              <Period>{job.period}</Period>
              <Role>{job.role}</Role>
              <Description>{job.description}</Description>
            </ExperienceItem>
          ))}
        </ExperienceList>

        {cvData.experience.length > 3 && (
          <ShowMoreButton onClick={() => setShowAllExperience(!showAllExperience)}>
            {showAllExperience ? 'Show Less' : `Show More (${cvData.experience.length - 3} more)`}
          </ShowMoreButton>
        )}

        <EducationList>
          {visibleEducation.map((edu, index) => (
            <EducationItem key={index}>
              <School>{edu.school}</School>
              <Period>{edu.period}</Period>
              <Program>{edu.program}</Program>
              <Description>{edu.description}</Description>
            </EducationItem>
          ))}
        </EducationList>

        {cvData.education.length > 3 && (
          <ShowMoreButton onClick={() => setShowAllEducation(!showAllEducation)}>
            {showAllEducation ? 'Show Less' : `Show More (${cvData.education.length - 3} more)`}
          </ShowMoreButton>
        )}

        <LinksContainer>
          <LinkItem href={cvData.links.portfolio} target="_blank" rel="noopener noreferrer">
            Design Portfolio →
          </LinkItem>
          <LinkItem href={cvData.links.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn →
          </LinkItem>
          <LinkItem href={cvData.links.github} target="_blank" rel="noopener noreferrer">
            GitHub →
          </LinkItem>
        </LinksContainer>
      </CVContainer>
    </Section>
  )
}