import React from 'react';
import { StyledInput } from './styled';
import { IInputProps } from './types';

export const Input = ({ setValue, type = 'text', value, ...props }: IInputProps) => (
  <StyledInput
    {...props}
    value={value}
    type={type}
    onChange={(event) => setValue(event.target.value)}
  />
);
