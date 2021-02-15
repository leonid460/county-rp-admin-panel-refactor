import React, { useEffect, useState } from 'react';
import { Base } from 'ui-kit/templates';
import * as Styled from './styled';
import { useParams } from 'react-router-dom';
import { AvatarArea, UserInfoArea } from 'modules/Profile';
import { getUserProfile } from 'api/user';
import { callNotification } from 'utils/callNotification';

export const Profile = () => {
  const { login } = useParams();
  const [username, setUsername] = useState('');
  const [persons, setPersons] = useState([]);

  const fetchData = async (login: string): Promise<void> => {
    const profile = await getUserProfile(login);
    setUsername(profile.player.login);
    setPersons(profile.persons);
  };

  useEffect(() => {
    fetchData(login).catch((error) => {
      callNotification({ type: 'error', header: 'Ошибка', content: error.message });
    });
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
