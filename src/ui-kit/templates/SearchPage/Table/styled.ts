import styled from 'styled-components';
import { ITheme } from 'types';

export const Container = styled.div<{ theme: ITheme }>`
  width: 100%;
  min-height: calc(100vh * 0.3);
  height: 100%;
  padding: 6px 0;
  border-radius: 6px;

  background: ${({ theme }) => theme.colors.table.headerBackground};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const Cell = styled.td<{ theme: ITheme }>`
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const HeaderCell = styled.th<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const Row = styled.tr<{ theme: ITheme }>`
  height: 48px;
  background: ${({ theme }) => theme.colors.table.rowBackground};

  tbody > &:nth-child(2n-1) {
    background: ${({ theme }) => theme.colors.table.rowEvenBackground};
  }

  & > ${Cell}, & > ${HeaderCell} {
    &:first-child {
      padding-left: 24px;
    }

    &:last-child {
      padding-right: 24px;
    }
  }
`;