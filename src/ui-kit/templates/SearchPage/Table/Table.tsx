import React, { useState } from 'react';
import * as Styled from './styled';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';
import { ITableProps } from './types';
import { InfoModal } from './TableRow/InfoModal';

export const Table = ({ columnsHeads, rows, editRoute }: ITableProps) => {
  const headNames = columnsHeads.map((head) => head.name);
  const headKeys = columnsHeads.map((head) => head.key);
  const [rowToShowInModalIndex, setRowToShowInModalIndex] = useState(NaN);
  const rowToShowInModal = !Object.is(NaN, rowToShowInModalIndex)
    ? rows[rowToShowInModalIndex]
    : null;

  const rowsWithOnlyVisibleColumns = rows.map((row) => {
    const entries = headKeys.map((key) => [key, row[key]]);

    return Object.fromEntries(entries);
  });

  const hideInfoModal = () => {
    setRowToShowInModalIndex(NaN);
  };

  const showModalFactory = (index: number) => {
    return function showInfoModal() {
      setRowToShowInModalIndex(index);
    };
  };

  return (
    <Styled.Container>
      <TableHead names={headNames} />
      {rowsWithOnlyVisibleColumns.map((row, key) => (
        <TableRow
          data={row}
          key={key}
          editRoute={editRoute}
          handleInfoButtonClick={showModalFactory(key)}
        />
      ))}
      <InfoModal heads={columnsHeads} data={rowToShowInModal} hide={hideInfoModal} />
    </Styled.Container>
  );
};
