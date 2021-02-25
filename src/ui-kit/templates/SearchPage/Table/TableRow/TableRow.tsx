import React from 'react';
import * as Styled from './styled';
import { ITableRowProps } from './types';
import { EditButton } from './EditButton';

export const TableRow = ({ data, editRoute }: ITableRowProps) => {
  const keys = Object.keys(data);
  const widthButton = !!editRoute;
  const paramKey = widthButton ? getUrlParamKey(editRoute) : undefined;
  const editRouteWithValue = widthButton
    ? replaceKeyWithValueInRoute(paramKey, String(data[paramKey]), editRoute)
    : undefined;

  return (
    <Styled.Container>
      {keys.map((key) => (
        <Styled.Column key={key}>{data[key]}</Styled.Column>
      ))}
      <Styled.ColumnForButtons>
        {editRoute && <EditButton to={editRouteWithValue} />}
      </Styled.ColumnForButtons>
    </Styled.Container>
  );
};

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
