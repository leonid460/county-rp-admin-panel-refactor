import React from 'react';
import { ITileProps } from './types';
import { TileContainer, TileButton, TileDescription, TileHeader } from './styled';

export const Tile: React.FC<ITileProps> = ({ description, name, to }) => (
  <TileContainer>
    <TileHeader>{name}</TileHeader>
    <TileDescription>{description}</TileDescription>
    <TileButton to={to}>Далее</TileButton>
  </TileContainer>
);
