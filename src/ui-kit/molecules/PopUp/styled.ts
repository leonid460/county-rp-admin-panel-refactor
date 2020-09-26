import styled from 'styled-components';
import { TAlign } from './types';

export const PopUpContainer = styled.div<{ align?: TAlign }>`
  position: absolute;
  top: calc(100% + 5px);
  ${({ align }) => (align === 'left' ? `left: 0;` : `right: 0;`)};

  overflow: hidden;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.container};
  outline: none;

  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.02), 0 0 15px rgba(52, 64, 75, 0.06);
  animation: fade-in 0.4s ease;
`;

export const PopUpOpenerWrapper = styled.div`
  background: none;
  border: none;
  outline: none;

  cursor: pointer;
`;

export const PopUpWrapper = styled.div`
  position: relative;
  display: table;
  width: 0;
  background: red;
`;
