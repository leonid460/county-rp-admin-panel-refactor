import React from 'react';
import { ICheckboxProps } from './types';
import * as Styled from './styled';

export const Checkbox = ({ className, checked, handleCheck }: ICheckboxProps) => (
  <Styled.CheckboxContainer className={className}>
    <input type="checkbox" checked={checked} onChange={handleCheck} />
    <Styled.CheckBoxMark checked={checked ? 1 : 0} />
  </Styled.CheckboxContainer>
);
