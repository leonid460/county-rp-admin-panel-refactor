import React from 'react';
import { StyledInput } from './styled';
import { IInputProps } from './types';

export const Input: React.FC<IInputProps> = ({ setValue, type = 'text', value, ...props }) => (
  <StyledInput
    {...props}
    value={value || ''}
    type={type}
    onChange={(event) => setValue(event.target.value)}
  />
);
