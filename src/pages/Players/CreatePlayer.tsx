import React, { useState } from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';
import { InputWithLabel } from 'ui-kit/molecules/InputWithLabel';
import { createPlayer } from 'api';
import { players } from 'routes';
import { of } from 'utils';
import { SearchGroup } from 'modules/Search/SearchGroup';
import { useHistory } from 'react-router-dom';

function useDataProvider() {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState<{ name: string; value: string } | null>(null);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const groupId = group.value;
    const { error } = await of(createPlayer({ login, password, groupId }));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      history.push(players);
    }
  };

  const handleGoBack = () => {
    history.push(players);
  };

  return {
    login,
    setLogin,
    password,
    setPassword,
    group,
    setGroup,
    handleSubmit,
    handleGoBack,
    asyncCallError
  };
}

export const CreatePlayer = () => {
  const {
    login,
    password,
    setLogin,
    setPassword,
    group,
    setGroup,
    handleSubmit,
    handleGoBack,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="create"
      handleSubmit={handleSubmit}
      asyncCallError={asyncCallError}
      handleGoBack={handleGoBack}
    >
      <InputWithLabel label="логин" value={login} setValue={setLogin} />
      <InputWithLabel label="пароль" value={password} setValue={setPassword} />
      <SearchGroup currentItem={group} setCurrentItem={setGroup} />
    </CreateOrEditPage>
  );
};
