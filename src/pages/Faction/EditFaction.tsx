import React, { useEffect, useState } from 'react';
import { editFaction, getFaction, deleteFaction } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { faction } from 'routes';
import { getEntityIdFromUrl, of } from 'utils';
import { useHistory } from 'react-router-dom';
import { InputWithLabel } from 'ui-kit/molecules';

function useDataProvider() {
  const history = useHistory();
  const pathName = history.location.pathname;

  const [id, setId] = useState(getEntityIdFromUrl(pathName));
  const [name, setName] = useState('');
  const [ranks, setRanks] = useState<string[]>([]);
  const [type, setType] = useState(NaN);

  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(editFaction({ id, name, ranks, type }));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleDelete = async () => {
    const { error } = await of(deleteFaction(id));

    if (error) {
      setAsyncCallError(error.message);
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
  }, [id]);

  return {
    id,
    setId,
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
    id,
    setId,
    name,
    setName,
    type,
    setType,
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
      <InputWithLabel label="ID" value={id} setValue={setId} />
      <InputWithLabel label="имя фракции" value={name} setValue={setName} />
      <InputWithLabel label="тип" value={type} setValue={setType} type="number" />
    </CreateOrEditPage>
  );
};
