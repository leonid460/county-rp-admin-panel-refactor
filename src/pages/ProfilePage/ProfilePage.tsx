import React from 'react';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { Avatar } from 'ui-kit/atoms';
import { CharactersSection } from 'modules/CharactersSection';

const persons = [
  {
    name: 'CJ',
    faction: { name: 'Groove Street', id: 'grv' },
    vehicles: [{ id: 'camaro' }, { id: 'murcielago' }]
  }
];

export const ProfilePage = () => {
  return (
    <Base>
      <Styled.ProfilePageWrapper>
        <Styled.ProfileContainer>
          <Styled.AvatarArea>
            <Avatar size={150}>User</Avatar>
          </Styled.AvatarArea>
          <Styled.UserInfoArea>
            <Styled.UserName>UserName</Styled.UserName>
            <CharactersSection persons={persons} />
          </Styled.UserInfoArea>
        </Styled.ProfileContainer>
      </Styled.ProfilePageWrapper>
    </Base>
  );
};
