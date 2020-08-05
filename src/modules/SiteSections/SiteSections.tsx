import React from 'react';
import { TilesGrid } from './styled';
import { Tile } from './Tile';
import { locations } from 'locations';

export const SiteSections = () => (
  <TilesGrid>
    {locations.map((location, key) => (
      <Tile key={key} name={location.name} description={location.description} to={location.route} />
    ))}
  </TilesGrid>
);
