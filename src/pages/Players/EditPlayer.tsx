import React, { useEffect, useState } from 'react';
import { editPlayer, getPlayer, getGroup, deletePlayer } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { players } from 'routes';
import { useHistory } from 'react-router-dom';
import { getEntityIdFromUrl, of } from 'utils';
import { InputWithLabel } from 'ui-kit/molecules';
import { SearchGroup } from 'modules/Search';

function useDataProvider() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [group, setGroup] = useState<{ name: string; value: string } | null>(null);
  const [asyncCallError, setAsyncCallError] = useState('');
  const history = useHistory();
  const pathName = history.location.pathname;
  const id = getEntityIdFromUrl(pathName);

  const handleSubmit = async () => {
    const { error } = await of(editPlayer({ login, password, groupId: group.value }));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  const handleDelete = async () => {
    const { error } = await of(deletePlayer(group.value));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      const playerResult = await of(getPlayer(id));

      if (playerResult.error) {
        setAsyncCallError(playerResult.error.message);

        return;
      }

      const { login, groupId, password } = playerResult.data;
      const groupResult = await of(getGroup(groupId));
      const groupName = groupResult.data.name;

      if (groupResult.error) {
        setAsyncCallError(groupResult.error.message);

        return;
      }

      setLogin(login);
      setPassword(password);
      setGroup({ name: groupName, value: groupId });
    })();
  }, [id]);

  return {
    login,
    setLogin,
    password,
    setPassword,
    group,
    setGroup,
    handleSubmit,
    handleDelete,
    asyncCallError
  };
}

export const EditPlayer = () => {
  const {
    login,
    setLogin,
    password,
    setPassword,
    group,
    setGroup,
    handleSubmit,
    handleDelete,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="edit"
      goBackRoute={players}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      asyncCallError={asyncCallError}
    >
      <InputWithLabel label="логин" value={login} setValue={setLogin} />
      <InputWithLabel label="пароль" value={password} setValue={setPassword} type="password" />
      <SearchGroup currentItem={group} setCurrentItem={setGroup} />
    </CreateOrEditPage>
  );
};
