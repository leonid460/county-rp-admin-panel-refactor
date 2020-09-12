import styled from 'styled-components';
import { ITheme } from 'types';

export const PopUpContainer = styled.div<{ theme: ITheme }>`
  position: absolute;
  top: calc(100% + 5px);
  right: 0;

  overflow: hidden;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.container};
  outline: none;

  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.02), 0 0 15px rgba(52, 64, 75, 0.06);
  animation: fade-in 0.4s ease;
`;

export const PopUpOpenerWrapper = styled.button`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;

export const PopUpWrapper = styled.div`
  position: relative;
`;
