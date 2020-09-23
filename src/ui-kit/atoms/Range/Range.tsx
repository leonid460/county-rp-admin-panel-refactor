import React from 'react';
import * as Styled from './styled';
import { IRangeProps } from './types';

export const Range: React.FC<IRangeProps> = ({ setValue, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return <Styled.Input type="range" {...props} onChange={handleChange} />;
};
