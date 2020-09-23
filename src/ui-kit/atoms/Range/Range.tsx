import React from 'react';
import * as Styled from './styled';
import { IRangeProps } from './types';

export const Range: React.FC<IRangeProps> = ({ setValue, trackColor, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <Styled.OuterWrapper>
      <Styled.InnerWrapper trackColor={trackColor}>
        <Styled.Input draggable={false} type="range" {...props} onChange={handleChange} />
      </Styled.InnerWrapper>
    </Styled.OuterWrapper>
  );
};
