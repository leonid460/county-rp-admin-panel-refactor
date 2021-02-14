import React from 'react';
import { SvgCrossIcon } from 'ui-kit/atoms';
import * as Styled from './styled';

export const ClearButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Styled.Container {...props}>
    <SvgCrossIcon />
  </Styled.Container>
);
