import React, { useState } from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';
import { InputWithLabel } from 'ui-kit/molecules/InputWithLabel';
import { createPlayer } from 'api';
import { players } from 'routes';
import { of } from 'utils';
import { SearchGroup } from 'modules/Search/SearchGroup';

function useDataProvider() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState<{ name: string; value: string } | null>(null);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const groupId = group.value;
    const { error } = await of(createPlayer({ login, password, groupId }));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  return {
    login,
    setLogin,
    password,
    setPassword,
    group,
    setGroup,
    handleSubmit,
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
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="create"
      handleSubmit={handleSubmit}
      asyncCallError={asyncCallError}
      goBackRoute={players}
    >
      <InputWithLabel label="логин" value={login} setValue={setLogin} />
      <InputWithLabel label="пароль" value={password} setValue={setPassword} type="password" />
      <SearchGroup currentItem={group} setCurrentItem={setGroup} />
    </CreateOrEditPage>
  );
};
