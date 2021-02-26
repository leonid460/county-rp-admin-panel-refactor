import React from 'react';
import { SvgInfoIcon } from './SvgInfoIcon';
import * as Styled from './styled';

export const InfoButton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <Styled.Container className={className} {...props}>
    <SvgInfoIcon />
  </Styled.Container>
);
