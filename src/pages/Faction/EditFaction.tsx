import React, { useEffect, useState } from 'react';
import { editFaction, getFaction, deleteFaction } from 'api';
import { faction } from 'routes';
import { getEntityIdFromUrl, of } from 'utils';
import { useHistory } from 'react-router-dom';
import { InputWithLabel } from 'ui-kit/molecules';
import { ListInputWithLabel } from 'ui-kit/organisms';
import { CreateOrEditPage } from 'ui-kit/templates';
import { callNotification } from 'utils';

function useDataProvider() {
  const history = useHistory();
  const pathName = history.location.pathname;
  const id = getEntityIdFromUrl(pathName);

  const [name, setName] = useState('');
  const [ranks, setRanks] = useState<string[]>([]);
  const [type, setType] = useState(NaN);

  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(editFaction(id, { id, name, ranks, type }));

    if (error) {
      callNotification({ header: 'Ошибка', content: error.message, type: 'error' });
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleDelete = async () => {
    const { error } = await of(deleteFaction(id));

    if (error) {
      callNotification({ header: 'Ошибка', content: error.message, type: 'error' });
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleGoBack = () => {
    history.push(faction);
  };

  useEffect(() => {
    (async () => {
      const result = await of(getFaction(id));

      if (result.error) {
        setAsyncCallError(result.error.message);

        return;
      }

      const { data } = result;

      setName(data.name);
      setRanks(data.ranks);
      setType(data.type);
    })();
  }, []);

  return {
    name,
    setName,
    ranks,
    setRanks,
    type,
    setType,
    handleSubmit,
    handleDelete,
    handleGoBack,
    asyncCallError
  };
}

export const EditFaction = () => {
  const {
    name,
    setName,
    type,
    setType,
    ranks,
    setRanks,
    handleSubmit,
    handleDelete,
    handleGoBack,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="edit"
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      asyncCallError={asyncCallError}
      handleGoBack={handleGoBack}
    >
      <InputWithLabel label="имя фракции" value={name} setValue={setName} />
      <InputWithLabel label="тип" value={type} setValue={setType} type="number" />
      <ListInputWithLabel label="ранги" items={ranks} setItems={setRanks} />
    </CreateOrEditPage>
  );
};
