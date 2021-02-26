import styled from 'styled-components';
import { Column as HeadColumn } from '../TableHead/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.colors.container};
  animation: 0.4s slide-down ease;

  &:nth-child(2n-1) {
    background: ${({ theme }) => theme.colors.table.rowEvenBackground};
  }
`;

export const Column = styled(HeadColumn)`
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ColumnForButtons = styled(Column)`
  display: flex !important;
  justify-content: flex-end;
  align-items: center;
  padding-right: 16px;
  padding-top: 16px;
  padding-bottom: 16px;

  & > * {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
