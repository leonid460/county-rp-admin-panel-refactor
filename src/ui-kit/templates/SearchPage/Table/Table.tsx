import React from 'react';
import * as Styled from './styled';
import { ITableProps, TTableColumnHead, TTableRow } from './types';

export const Table = ({ columnsHeads, rows, editRoute }: ITableProps) => {
  const widthButton = !!editRoute;
  const paramKey = widthButton ? getUrlParamKey(editRoute) : undefined;

  const renderRow = (row: TTableRow, index: number) => {
    const rowItems = getRowItemsList(row, columnsHeads);
    const editRouteWithValue = widthButton
      ? replaceKeyWithValueInRoute(paramKey, String(row[paramKey]), editRoute)
      : undefined;

    return (
      <Styled.Row key={index}>
        {rowItems.map((item, index) => (
          <Styled.Cell key={`${item}-${index}`}>{item}</Styled.Cell>
        ))}
        {widthButton && (
          <Styled.Cell>
            <Styled.EditButton to={editRouteWithValue} />
          </Styled.Cell>
        )}
      </Styled.Row>
    );
  };

  return (
    <Styled.Container>
      <Styled.Table>
        <thead>
          <Styled.Row>
            {columnsHeads.map(({ name }) => (
              <Styled.HeaderCell key={name}>{name}</Styled.HeaderCell>
            ))}
            {widthButton && <Styled.HeaderCell />}
          </Styled.Row>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </Styled.Table>
    </Styled.Container>
  );
};

function getRowItemsList(row: TTableRow, heads: TTableColumnHead[]): Array<string | number> {
  return heads.map(({ key }) => row[key]);
}

function getUrlParamKey(route: string) {
  const parts = route.split(':');

  if (parts.length > 1) {
    return parts[1];
  }

  return '';
}

function replaceKeyWithValueInRoute(key: string, value: string, route: string): string {
  const label = `:${key}`;

  return route.split(label).join(value);
}
