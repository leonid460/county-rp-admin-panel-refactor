import React from 'react';
import * as Styled from './styled';
import { Input } from 'ui-kit/atoms';
import { IFilterProps } from './types';

export const Filter = ({ fields }: IFilterProps) => {
  return (
    <Styled.Container>
      {fields.map((field) => (
        <Styled.FilterItem key={field.name}>
          <span>{field.name}</span>
          <Input value={field.value} setValue={field.setValue} />
        </Styled.FilterItem>
      ))}
    </Styled.Container>
  );
};
