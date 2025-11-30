import { useState } from 'react'
import { Section } from '@/components/Section'
import { Title, Text } from '@/components/Typography'
import { Button } from '@/components/Button'
import { 
  CVContainer, 
  ExperienceList, 
  ExperienceItem,
  EducationList,
  EducationItem,
  LinksContainer,
  ButtonContainer
} from './CV.styled'
import cvData from '@/data/cv.json'

export const CV = () => {
  const [showAllExperience, setShowAllExperience] = useState(false)
  const [showAllEducation, setShowAllEducation] = useState(false)
  
  const visibleExperience = showAllExperience ? cvData.experience : cvData.experience.slice(0, 3)
  const visibleEducation = showAllEducation ? cvData.education : cvData.education.slice(0, 3)

  return (
    <Section variant="cv" id="cv">
      <CVContainer className="cv">
        <Title as="h2" size="xs" color="var(--text-text)" className="cv__title "id="experience-title">Experience</Title>
        
        <ExperienceList className="cv__experiences-list" role="list" aria-labelledby="experience-title">
          {visibleExperience.map((job: any, index) => (
            <ExperienceItem key={index} className="cv__experience-item" role="listitem">
              {job.companyUrl ? (
                <Title 
                  as="h3" 
                  size="xs" 
                  className="cv__experience-company cv__experience-company--link"
                >
                  <a 
                    href={job.companyUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cv__company-link"
                    aria-label={`Visit ${job.company} website (opens in new tab)`}
                  >
                    {job.company}
                  </a>
                </Title>
              ) : (
                <Title as="h3" size="xs" className="cv__experience-company">{job.company}</Title>
              )}
              <Text size="sm" color="var(--text-muted)" className="cv__experience-period">{job.period}</Text>
              <Text size="sm" weight="medium" className="cv__experience-role">{job.role}</Text>
              <Text size="md" className="cv__experience-description">{job.description}</Text>
            </ExperienceItem>
          ))}
        </ExperienceList>

        {cvData.experience.length > 3 && (
          <ButtonContainer className="cv__button-container">
            <Button 
              variant="outline" 
              onClick={() => setShowAllExperience(!showAllExperience)}
              ariaLabel={showAllExperience ? 'Show less experience items' : `Show ${cvData.experience.length - 3} more experience items`}
              className="cv__show-more-button"
            >
              {showAllExperience ? 'Show Less' : `Show More (${cvData.experience.length - 3} more)`}
            </Button>
          </ButtonContainer>
        )}

        <Title as="h2" size="xs" color="var(--text-text)" className="cv__title" id="education-title">Education</Title>
        
        <EducationList className="cv__education-list" role="list" aria-labelledby="education-title">
          {visibleEducation.map((edu: any, index) => (
            <EducationItem key={index} className="cv__education-item" role="listitem">
              {edu.schoolUrl ? (
                <Title 
                  as="h3" 
                  size="xs" 
                  className="cv__education-school cv__education-school--link"
                >
                  <a 
                    href={edu.schoolUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cv__school-link"
                    aria-label={`Visit ${edu.school} website (opens in new tab)`}
                  >
                    {edu.school}
                  </a>
                </Title>
              ) : (
                <Title as="h3" size="xs" className="cv__education-school">{edu.school}</Title>
              )}
              <Text size="sm" color="var(--text-muted)" className="cv__education-period">{edu.period}</Text>
              <Text size="sm" weight="medium" className="cv__education-program">{edu.program}</Text>
              <Text size="md" className="cv__education-description">{edu.description}</Text>
            </EducationItem>
          ))}
        </EducationList>

        {cvData.education.length > 3 && (
          <ButtonContainer className="cv__button-container">
            <Button 
              variant="outline" 
              onClick={() => setShowAllEducation(!showAllEducation)}
              ariaLabel={showAllEducation ? 'Show less education items' : `Show ${cvData.education.length - 3} more education items`}
              className="cv__show-more-button"
            >
              {showAllEducation ? 'Show Less' : `Show More (${cvData.education.length - 3} more)`}
            </Button>
          </ButtonContainer>
        )}

        <Title as="h2" size="xl" className="cv__title sr-only" id="links-title">Links</Title>
        
        <LinksContainer className="cv__links" role="list" aria-labelledby="links-title">
          <Button 
            href={cvData.links.portfolio} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="ghost"
            className="cv__link-button"
            ariaLabel="Visit design portfolio (opens in new tab)"
          >
            Design Portfolio →
          </Button>
          <Button 
            href={cvData.links.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="ghost"
            className="cv__link-button"
            ariaLabel="Visit LinkedIn profile (opens in new tab)"
          >
            LinkedIn →
          </Button>
          <Button 
            href={cvData.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            variant="ghost"
            className="cv__link-button"
            ariaLabel="Visit GitHub profile (opens in new tab)"
          >
            GitHub →
          </Button>
        </LinksContainer>
      </CVContainer>
    </Section>
  )
}