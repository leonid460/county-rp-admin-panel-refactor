import React from 'react';
import * as Styled from './styled';
import { Input } from '../Input';
import { IInputWithLabelProps } from './types';

export const InputWithLabel = ({ label, ...props }: IInputWithLabelProps) => (
  <Styled.Wrapper>
    <span>{label}</span>
    <Input {...props} />
  </Styled.Wrapper>
);
