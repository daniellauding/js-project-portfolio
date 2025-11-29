import styled from 'styled-components';

export const StyleGuideContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  
  ${props => props.theme.media.tablet} {
    padding: var(--spacing-xxl);
  }
`;

export const Navigation = styled.nav`
  position: sticky;
  top: var(--spacing-lg);
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  margin: var(--spacing-xl) 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  border: 1px solid var(--border-color);
  z-index: 100;
  
  ${props => props.theme.media.mobile} {
    justify-content: center;
  }
`;

export const NavItem = styled.a`
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text-color);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--title-color);
    color: var(--bg-color);
    border-color: var(--title-color);
  }
  
  &:focus-visible {
    outline: 2px solid var(--title-color);
    outline-offset: 2px;
  }
`;

export const ComponentSection = styled.section`
  margin: var(--spacing-xxl) 0;
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  
  &:first-of-type {
    border-top: none;
    margin-top: 0;
  }
`;

export const ExampleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-xl);
  margin: var(--spacing-xl) 0;
  
  ${props => props.theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  }
`;

export const ExampleCard = styled.div`
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  background: var(--card-bg);
  box-shadow: 0 2px 4px var(--card-shadow);
  
  h3 {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-muted);
  }
`;

export const Preview = styled.div`
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  margin: var(--spacing-md) 0;
  
  /* Ensure preview content displays properly */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-sm);
  
  /* Handle different component layouts */
  > * {
    margin: 0;
  }
  
  /* Stack items vertically for titles */
  &:has(h1, h2, h3, h4, h5, h6) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CodeBlock = styled.div`
  position: relative;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  
  pre {
    margin: 0;
    padding: var(--spacing-md);
    background: none;
    color: var(--text-color);
    font-family: 'SF Mono', Monaco, Inconsolata, 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-size: var(--text-sm);
    line-height: 1.5;
    overflow-x: auto;
    white-space: pre;
  }
`;

export const CopyButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--title-color);
  color: var(--bg-color);
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &.copied {
    background: var(--color-tertiary);
  }
  
  &:focus-visible {
    outline: 2px solid var(--bg-color);
    outline-offset: -2px;
  }
`;

export const PropsTable = styled.div`
  margin: var(--spacing-xl) 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--card-bg);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 1px 3px var(--card-shadow);
  }
  
  th, td {
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
    border-bottom: 1px solid var(--border-color);
  }
  
  th {
    background: var(--bg-color);
    font-weight: var(--weight-semibold);
    color: var(--text-muted);
    font-size: var(--text-sm);
  }
  
  td {
    font-size: var(--text-sm);
    vertical-align: top;
  }
  
  td:first-child {
    font-family: 'SF Mono', Monaco, monospace;
    background: var(--bg-color);
    font-weight: var(--weight-medium);
    color: var(--color-secondary);
  }
  
  td:nth-child(2) {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: var(--text-xs);
    color: var(--color-primary);
  }
  
  td:nth-child(3) {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: var(--text-xs);
    color: var(--color-tertiary);
  }
  
  tbody tr:last-child td {
    border-bottom: none;
  }
  
  tbody tr:hover {
    background: var(--bg-color);
  }
`;

export const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: var(--spacing-md);
  margin: var(--spacing-lg) 0;
`;

export const ColorSwatch = styled.div<{ $color: string }>`
  background: ${props => props.$color};
  height: 80px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &::after {
    content: '${props => props.$color}';
    background: var(--text-color);
    color: var(--bg-color);
    padding: var(--spacing-xs);
    font-size: var(--text-xs);
    font-family: 'SF Mono', Monaco, monospace;
    width: 100%;
    text-align: center;
  }
`;