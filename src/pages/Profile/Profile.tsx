import React, { useEffect } from 'react';
import { selectUsername, selectUserPersons, getUserInfo } from 'store/userSlice';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AvatarArea, UserInfoArea } from 'modules/Profile';

export const Profile = () => {
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
          <AvatarArea username={username} />
          <UserInfoArea username={username} persons={persons} />
        </Styled.ProfileContainer>
      </Styled.ProfilePageWrapper>
    </Base>
  );
};
