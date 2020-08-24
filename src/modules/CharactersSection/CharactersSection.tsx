import React from 'react';
import * as Styled from './styled';
import { TPerson } from './types';

export const CharactersSection = ({ persons }: { persons: TPerson[] }) => (
  <Styled.CharactersSectionWrapper>
    <Styled.CharactersSectionDescription>Персонажи</Styled.CharactersSectionDescription>
    <Styled.CharactersSectionRow>
      <Styled.CharactersSectionHeaderCell>Имя</Styled.CharactersSectionHeaderCell>
      <Styled.CharactersSectionHeaderCell>Фракция</Styled.CharactersSectionHeaderCell>
      <Styled.CharactersSectionHeaderCell>Имущество</Styled.CharactersSectionHeaderCell>
    </Styled.CharactersSectionRow>
    {persons.map((person, key) => (
      <Styled.CharactersSectionRow key={key}>
        <Styled.CharactersSectionCell>{person.name}</Styled.CharactersSectionCell>
        <Styled.CharactersSectionCell>
          {person.faction.id + ':' + person.faction.name}
        </Styled.CharactersSectionCell>
        <Styled.CharactersSectionCell>
          {person.vehicles.map((vehicle, key) => (
            <li key={key}>{vehicle.id}</li>
          ))}
        </Styled.CharactersSectionCell>
      </Styled.CharactersSectionRow>
    ))}
  </Styled.CharactersSectionWrapper>
);
