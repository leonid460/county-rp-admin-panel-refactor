import React, { useEffect } from 'react';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { Avatar } from 'ui-kit/atoms';
import { CharactersSection } from 'modules/CharactersSection';
import { useStore } from 'stores';
import { useParams } from 'react-router-dom';

export const ProfilePage = () => {
  const { userStore } = useStore();
  const { login } = useParams();

  useEffect(() => {
    userStore.getUserInfo(login);
  }, [login]);

  return (
    <Base>
      <Styled.ProfilePageWrapper>
        <Styled.ProfileContainer>
          <Styled.AvatarArea>
            <Avatar size={150}>{userStore.currentUser.username}</Avatar>
          </Styled.AvatarArea>
          <Styled.UserInfoArea>
            <Styled.UserName>{userStore.currentUser.username}</Styled.UserName>
            <CharactersSection persons={userStore.persons} />
          </Styled.UserInfoArea>
        </Styled.ProfileContainer>
      </Styled.ProfilePageWrapper>
    </Base>
  );
};
