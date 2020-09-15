import React from 'react';

export interface IInputProps {
  type?: 'text' | 'password';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string | number>>;
  placeholder?: string;
}
