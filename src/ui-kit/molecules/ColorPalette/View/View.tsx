import React from 'react';
import * as Styled from './styled';

interface IViewProps {
  color: number;
  saturation: number;
  brightness: number;
}

export const View = ({ color, saturation, brightness }: IViewProps) => {
  const hslColor = `hsl(${color}, ${saturation}%, ${brightness}%)`;

  return <Styled.View hslColor={hslColor} />;
};
