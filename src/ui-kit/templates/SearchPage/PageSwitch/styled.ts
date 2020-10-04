import styled from 'styled-components';
import { ITheme } from 'types';

export const PageButton = styled.div<{ theme: ITheme; active?: 1 | 0 }>`
  padding: 5px;
  border: 1px solid;
  border-radius: 3px;
  font-size: 13px;
  cursor: pointer;

  ${({ theme, active }) =>
    active
      ? `
    background: ${theme.colors.primaryButton.background};
    color: ${theme.colors.primaryButton.color};
    border-color: ${theme.colors.primaryButton.background};
    
    &:hover {
      background: ${theme.colors.primaryButton.hoverBackground};
      color: ${theme.colors.primaryButton.hoverColor};
    }
  `
      : `
    background: ${theme.colors.secondaryButton.background};
    color: ${theme.colors.secondaryButton.color};
    border-color: ${theme.colors.secondaryButton.borderColor};
    
    &:hover {
      background: ${theme.colors.secondaryButton.hoverBackground};
      color: ${theme.colors.secondaryButton.hoverColor};
      border-color: ${theme.colors.secondaryButton.hoverBorderColor};
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-left: auto;
  padding: 13px;

  * + * {
    margin-left: 10px;
  }
`;

export const DotsFiller = styled.div<{ theme: ITheme }>`
  ${({ theme }) => `
    color: ${theme.colors.secondaryText}
  `}
`;
