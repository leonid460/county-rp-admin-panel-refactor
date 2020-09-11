import React from 'react';
import * as Styled from './styled';
import { IUserInfoAreaProps } from './types';
import { CharactersSection } from './CharactersSection';

export const UserInfoArea: React.FC<IUserInfoAreaProps> = ({ username, persons }) => (
  <Styled.UserInfoArea>
    <Styled.UserName>{username}</Styled.UserName>
    <CharactersSection persons={persons} />
  </Styled.UserInfoArea>
);
