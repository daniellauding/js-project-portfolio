import styled from 'styled-components';

export const StyledSkipLink = styled.a`
  position: absolute;
  left: -9999px;
  top: auto;
  background-color: var(--title-color);
  color: var(--bg-color);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-family: var(--text-font-family);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  white-space: nowrap;
  z-index: 9999;
  transition: top 0.2s ease-in-out;
  &:focus, 
  &:focus-within,
  &:active {
    position: fixed;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    overflow: visible;
    clip: auto;
    white-space: nowrap;
    z-index: 999999;
    padding: 12px 24px;
    background: var(--title-color);
    color: var(--bg-color);
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }
`;