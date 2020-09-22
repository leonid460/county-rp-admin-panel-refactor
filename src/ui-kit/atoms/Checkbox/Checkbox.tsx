import React from 'react';
import { ICheckboxProps } from './types';
import * as Styled from './styled';

export const Checkbox: React.FC<ICheckboxProps> = ({ className, value, setValue }) => {
  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  return (
    <Styled.CheckboxContainer className={className}>
      <input type="checkbox" checked={value} onChange={handleCheck} />
      <Styled.CheckBoxMark checked={value ? 1 : 0} />
    </Styled.CheckboxContainer>
  );
};
