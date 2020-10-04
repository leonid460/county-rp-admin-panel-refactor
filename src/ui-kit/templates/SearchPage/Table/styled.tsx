import styled from 'styled-components';
import { ITheme } from 'types';
import { SectionContainer } from 'ui-kit/atoms';
import { NavLink } from 'react-router-dom';
import React from 'react';

export const Container = styled(SectionContainer)<{ theme: ITheme }>`
  flex-grow: 1;
  width: 100%;
  min-height: calc(100vh * 0.3);
  padding: 6px 0;
  border-radius: 6px;
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
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: left !important;
`;

export const Row = styled.tr<{ theme: ITheme }>`
  height: 48px;
  background: ${({ theme }) => theme.colors.table.rowBackground};

  tbody > & {
    animation: 0.4s slide-down ease;

    &:nth-child(2n-1) {
      background: ${({ theme }) => theme.colors.table.rowEvenBackground};
    }
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

export const EditButton = styled(NavLink).attrs(() => ({
  children: <span className="material-icons">edit</span>
}))`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  justify-content: flex-end;

  & .material-icons {
    color: ${({ theme }) => theme.colors.primaryButton.color};
    background: ${({ theme }) => theme.colors.primaryButton.background};
    border-radius: 3px;
    padding: 2px;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryButton.hoverColor};
      background: ${({ theme }) => theme.colors.primaryButton.hoverBackground};
    }
  }
`;
