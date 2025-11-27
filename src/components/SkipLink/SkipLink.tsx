import { SkipLinkProps } from './SkipLink.types';
import { StyledSkipLink } from './SkipLink.styled';

export const SkipLink = ({ href, children, className }: SkipLinkProps) => {
  return (
    <StyledSkipLink 
      href={href} 
      className={`skip-link ${className || ''}`.trim()}
    >
      {children}
    </StyledSkipLink>
  );
};

export default SkipLink;