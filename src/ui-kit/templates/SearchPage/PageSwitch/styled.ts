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
    background: ${theme.colors.highlight};
    color: ${theme.colors.container};
    border-color: ${theme.colors.highlight};
  `
      : `
    background: ${theme.colors.container};
    color: ${theme.colors.highlight};
    border-color: ${theme.colors.border};
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
