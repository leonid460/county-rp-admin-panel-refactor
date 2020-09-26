import styled from 'styled-components';
import { IAvatarContainerProps } from './types';

export const AvatarContainer = styled.div<IAvatarContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => `
    min-width: ${size}px;
    min-height: ${size}px;
    max-width: ${size}px;
    max-height: ${size}px;
    border-radius: 50%;
    margin: 0;
    font-weight: bold;
    font-size: ${size / 2}px;
  `}

  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
`;
