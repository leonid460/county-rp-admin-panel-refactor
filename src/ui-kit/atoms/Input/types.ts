import React from 'react';

export interface IInputProps {
  type?: 'text' | 'password' | 'number';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  placeholder?: string;
  className?: string;
}
