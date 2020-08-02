import styled from 'styled-components';
import { ITheme } from 'types';

export const StyledInput = styled.input<{ color?: string; theme: ITheme }>`
  height: 38px;
  width: 220px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  outline: none;
  padding-left: 7px;
  box-sizing: border-box;
  display: block;
  color: ${({ theme }) => theme.colors.input.text} !important;
  background: ${({ theme }) => theme.colors.input.background} !important;
`;
