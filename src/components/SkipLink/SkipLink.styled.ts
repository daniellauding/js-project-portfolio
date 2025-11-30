import styled from 'styled-components';

export const StyledSkipLink = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border-width: 0;
  background-color: var(--title-color);
  color: var(--bg-color);
  font-family: var(--text-font-family);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  z-index: 9999;
  transition: all 0.2s ease-in-out;
  
  &:focus, 
  &:focus-within,
  &:active {
    position: fixed;
    top: 10px;
    left: 10px;
    width: auto;
    height: auto;
    padding: 12px 24px;
    margin: 0;
    overflow: visible;
    clip: auto;
    clip-path: none;
    white-space: nowrap;
    z-index: 999999;
    background: var(--title-color);
    color: var(--bg-color);
    text-decoration: none;
    border-radius: 4px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    outline: 3px solid var(--color-primary);
    outline-offset: 2px;
  }
`;