import React from 'react';
import * as Styled from './styled';
import { IFilterProps } from './types';

export const Filter = ({ fields }: IFilterProps) => {
  return (
    <Styled.Container>
      {fields.map(({ name, value, setValue }) => (
        <Styled.FilterItem key={name} label={name} value={value} setValue={setValue} />
      ))}
    </Styled.Container>
  );
};
