import styled from 'styled-components'

export const SkillsGrid = styled.div`
  display: grid;
  gap: var(--spacing-xxl);
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props => props.theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const SkillCategory = styled.div`
  text-align: center;
`

export const CategoryHeader = styled.div`
  // padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-sm);
  
  // &.code {
  //   background: var(--color-secondary);
  // }
  
  // &.toolbox {
  //   background: var(--color-primary);
  // }
  
  // &.upcoming {
  //   background: var(--color-tertiary);
  // }
  
  // &.more {
  //   background: var(--color-secondary);
  // }
`

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`

export const SkillItem = styled.li`
  font-family: var(--text-font-family);
  font-size: var(--text-md);
  color: var(--section-skills-text-color);
  text-align: left;
`