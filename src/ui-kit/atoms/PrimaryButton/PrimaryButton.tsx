import styled from 'styled-components';
import { ITheme } from 'types';

export const PrimaryButton = styled.button<{ theme: ITheme }>`
  padding: 13px 26px;

  border: none;
  border-radius: 7px;

  background: ${({ theme }) => theme.colors.primaryButton.background};
  color: ${({ theme }) => theme.colors.primaryButton.color};
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryButton.hoverBackground};
    color: ${({ theme }) => theme.colors.primaryButton.hoverColor};
  }
`;
