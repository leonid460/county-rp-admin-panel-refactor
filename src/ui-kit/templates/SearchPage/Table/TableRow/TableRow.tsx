import React, { useEffect, useState } from 'react';
import * as Styled from './styled';
import { ITableRowProps } from './types';
import { EditButton } from './EditButton';
import { InfoButton } from './InfoButton';
import { useDeviceTypeName } from 'utils';

export const TableRow = ({ data, editRoute, handleInfoButtonClick }: ITableRowProps) => {
  const [visibleColumnsAmount, setVisibleColumnsAmount] = useState(1);
  const deviceTypeName = useDeviceTypeName();
  const keys = Object.keys(data);
  const withButton = !!editRoute;
  const paramKey = withButton ? getUrlParamKey(editRoute) : undefined;
  const editRouteWithValue = withButton
    ? replaceKeyWithValueInRoute(paramKey, String(data[paramKey]), editRoute)
    : undefined;
  const dataColumnsCount = keys.length;

  useEffect(() => {
    switch (deviceTypeName) {
      case 'mobileS':
        setVisibleColumnsAmount(1);
        break;
      case 'mobileM':
        setVisibleColumnsAmount(2);
        break;
      case 'mobileL':
        setVisibleColumnsAmount(3);
        break;
      case 'tablet':
        setVisibleColumnsAmount(4);
        break;
      case 'laptop':
        setVisibleColumnsAmount(5);
        break;
      case 'laptopL':
        setVisibleColumnsAmount(6);
        break;
      case 'desktop':
        setVisibleColumnsAmount(7);
        break;
      case 'desktopL':
        setVisibleColumnsAmount(8);
        break;
    }
  }, [deviceTypeName]);

  return (
    <Styled.Container>
      {keys.map((key) => (
        <Styled.Column key={key}>{data[key]}</Styled.Column>
      ))}
      <Styled.ColumnForButtons>
        {dataColumnsCount > visibleColumnsAmount && <InfoButton onClick={handleInfoButtonClick} />}
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
