import styled from 'styled-components';

export const StyledSkipLink = styled.a`
  /* Hidden by default */
  position: absolute;
  top: -40px;
  left: var(--spacing-sm);
  
  /* Styling */
  background-color: var(--title-color);
  color: #ffffff;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-family: var(--text-font-family);
  font-size: var(--text-sm);
  font-weight: var(--weight-semibold);
  text-decoration: none;
  white-space: nowrap;
  
  /* High z-index to appear above everything */
  z-index: 9999;
  
  /* Smooth animation */
  transition: top 0.2s ease-in-out;
  
  /* Show when focused */
  &:focus {
    top: var(--spacing-sm);
  }
  
  /* Hover state when visible */
  &:focus:hover {
    background-color: #0920d9;
  }
`;