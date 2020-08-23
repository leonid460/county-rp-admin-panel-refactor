import styled from 'styled-components';
import { ITheme } from 'types';

export const TopPanelContainer = styled.div<{ theme: ITheme }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  width: 100%;
  min-height: 80px;
  height: 80px;
  padding-right: 40px;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.container};
`;

export const TextRow = styled.div<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.header};
  font-size: 16px;
  font-weight: bold;
  background: none;
  border: none;

  text-decoration: none;
`;

export const LocationTag = styled(TextRow)`
  margin-right: auto;
`;
