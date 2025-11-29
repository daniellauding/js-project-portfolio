import styled from 'styled-components'

export const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  background: var(--card-bg);
  border: 2px solid var(--border-color);
  border-radius: var(--radius-round);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px var(--card-shadow);

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px var(--card-shadow);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    top: 15px;
    right: 15px;
  }
`

export const IconWrapper = styled.span`
  font-size: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`