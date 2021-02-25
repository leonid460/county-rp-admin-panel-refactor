import React from 'react';
import * as Styled from './styled';
import { ITableHeadProps } from './types';

export const TableHead = ({ names }: ITableHeadProps) => {
  return (
    <Styled.Container>
      <Styled.ColumnsContainer>
        {names.map((name) => (
          <Styled.Column key={name}>{name}</Styled.Column>
        ))}
        <Styled.Column />
      </Styled.ColumnsContainer>
      <Styled.Border />
    </Styled.Container>
  );
};
