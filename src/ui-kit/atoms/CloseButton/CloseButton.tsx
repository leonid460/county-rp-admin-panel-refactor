import React from 'react';
import * as Styled from './styled';

export const CloseButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <Styled.Container {...props}>
    <Styled.Icon />
  </Styled.Container>
);
