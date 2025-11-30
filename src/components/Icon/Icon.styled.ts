import styled from 'styled-components'

export const StyledIcon = styled.div<{
  $size?: string
  $customSize?: string
  $color?: string
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${props => {
    // if (props.$size === 's') return '16px'
    // if (props.$size === 'l') return '32px'
    // return '24px'
  }};

  height: ${props => {
    // if (props.$size === 's') return '16px'
    // if (props.$size === 'l') return '32px'
    // return '24px'
  }};

  ${props =>
    props.$customSize &&
    `
    width: ${props.$customSize};
    height: ${props.$customSize};
  `}

  color: ${props => props.$color || 'inherit'};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`