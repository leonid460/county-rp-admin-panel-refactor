import React, { useEffect } from 'react';
import { selectUsername, selectUserPersons, getUserInfo } from 'store/userSlice';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { Avatar } from 'ui-kit/atoms';
import { CharactersSection } from 'modules/CharactersSection';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const ProfilePage = () => {
  const { login } = useParams();
  const dispatch = useDispatch();
  const username = useSelector(selectUsername);
  const persons = useSelector(selectUserPersons);

  useEffect(() => {
    dispatch(getUserInfo({ username: login }));
  }, [login]);

  return (
    <Base>
      <Styled.ProfilePageWrapper>
        <Styled.ProfileContainer>
          <Styled.AvatarArea>
            <Avatar size={150}>{username}</Avatar>
          </Styled.AvatarArea>
          <Styled.UserInfoArea>
            <Styled.UserName>{username}</Styled.UserName>
            <CharactersSection persons={persons} />
          </Styled.UserInfoArea>
        </Styled.ProfileContainer>
      </Styled.ProfilePageWrapper>
    </Base>
  );
};
