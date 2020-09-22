import React from 'react';

export interface ICheckboxProps {
  className?: string;
  checked: boolean;
  handleCheck: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
