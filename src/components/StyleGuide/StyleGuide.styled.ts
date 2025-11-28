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
  background: #f8f9fa;
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  margin: var(--spacing-xl) 0;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  border: 1px solid #e9ecef;
  z-index: 100;
  
  ${props => props.theme.media.mobile} {
    justify-content: center;
  }
`;

export const NavItem = styled.a`
  padding: var(--spacing-xs) var(--spacing-sm);
  background: white;
  border: 1px solid #dee2e6;
  border-radius: var(--radius-sm);
  text-decoration: none;
  color: var(--text-color);
  font-size: var(--text-sm);
  font-weight: var(--weight-medium);
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--title-color);
    color: white;
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
  border-top: 1px solid #e9ecef;
  
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
  border: 1px solid #e9ecef;
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  h3 {
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    margin-bottom: var(--spacing-md);
    color: #6c757d;
  }
`;

export const Preview = styled.div`
  background: #f8f9fa;
  border: 1px solid #e9ecef;
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
  background: #f1f3f4;
  border: 1px solid #d0d7de;
  border-radius: var(--radius-md);
  overflow: hidden;
  
  pre {
    margin: 0;
    padding: var(--spacing-md);
    background: none;
    color: #24292f;
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
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: var(--weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #0920d9;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &.copied {
    background: #28a745;
  }
  
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: -2px;
  }
`;

export const PropsTable = styled.div`
  margin: var(--spacing-xl) 0;
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  th, td {
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
    border-bottom: 1px solid #e9ecef;
  }
  
  th {
    background: #f8f9fa;
    font-weight: var(--weight-semibold);
    color: #495057;
    font-size: var(--text-sm);
  }
  
  td {
    font-size: var(--text-sm);
    vertical-align: top;
  }
  
  td:first-child {
    font-family: 'SF Mono', Monaco, monospace;
    background: #f1f3f4;
    font-weight: var(--weight-medium);
    color: #d73a49;
  }
  
  td:nth-child(2) {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: var(--text-xs);
    color: #6f42c1;
  }
  
  td:nth-child(3) {
    font-family: 'SF Mono', Monaco, monospace;
    font-size: var(--text-xs);
    color: #28a745;
  }
  
  tbody tr:last-child td {
    border-bottom: none;
  }
  
  tbody tr:hover {
    background: #f8f9fa;
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
  border: 1px solid #e9ecef;
  display: flex;
  align-items: flex-end;
  position: relative;
  
  &::after {
    content: '${props => props.$color}';
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: var(--spacing-xs);
    font-size: var(--text-xs);
    font-family: 'SF Mono', Monaco, monospace;
    width: 100%;
    text-align: center;
  }
`;