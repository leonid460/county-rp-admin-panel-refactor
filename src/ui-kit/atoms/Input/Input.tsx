import React from 'react';
import { StyledInput } from './styled';

type InputProps = {
  type?: 'text' | 'password';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  placeholder: string;
};

export const Input = ({ setValue, type = 'text', value, ...props }: InputProps) => (
  <StyledInput
    {...props}
    value={value}
    type={type}
    onChange={(event) => setValue(event.target.value)}
  />
);
