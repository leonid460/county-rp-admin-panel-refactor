import React from 'react';
import * as Styled from './styled';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { ITableProps } from './types';

export const Table = ({ columnsHeads, rows, editRoute }: ITableProps) => {
  const headNames = columnsHeads.map((head) => head.name);
  const headKeys = columnsHeads.map((head) => head.key);

  const rowsWithOnlyVisibleColumns = rows.map((row) => {
    const entries = headKeys.map((key) => [key, row[key]]);

    return Object.fromEntries(entries);
  });

  return (
    <Styled.Container>
      <TableHead names={headNames} />
      {rowsWithOnlyVisibleColumns.map((row, key) => (
        <TableRow data={row} key={key} editRoute={editRoute} />
      ))}
    </Styled.Container>
  );
};
