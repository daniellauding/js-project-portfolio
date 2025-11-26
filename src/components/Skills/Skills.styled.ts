import styled from 'styled-components'

export const SkillsGrid = styled.div`
  display: grid;
  gap: var(--spacing-xl);
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
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  border-radius: var(--radius-sm);
  
  &.code {
    background: #ff4575;
  }
  
  &.toolbox {
    background: #4f9cf9;
  }
  
  &.upcoming {
    background: #7cb342;
  }
  
  &.more {
    background: #ffa726;
  }
`

export const CategoryTitle = styled.h3`
  font-family: var(--title-font-family);
  font-size: var(--title-sm);
  font-weight: var(--weight-bold);
  color: white;
  margin: 0;
  text-transform: capitalize;
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
  color: white;
  text-align: left;
`