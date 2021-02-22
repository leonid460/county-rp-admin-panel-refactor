import React, { useState } from 'react';
import { createFaction } from 'api';
import { faction } from 'routes';
import { of } from 'utils';
import { InputWithLabel } from 'ui-kit/molecules';
import { ListInputWithLabel } from 'ui-kit/organisms';
import { CreateOrEditPage } from 'ui-kit/templates';
import { useHistory } from 'react-router-dom';

function useDataProvider() {
  const history = useHistory();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ranks, setRanks] = useState<string[]>([]);
  const [type, setType] = useState(NaN);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(createFaction({ id, name, ranks, type }));

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
    handleGoBack,
    asyncCallError
  };
}

export const CreateFaction = () => {
  const {
    id,
    setId,
    name,
    setName,
    ranks,
    setRanks,
    type,
    setType,
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
      <InputWithLabel label="ID" value={id} setValue={setId} />
      <InputWithLabel label="имя фракции" value={name} setValue={setName} />
      <InputWithLabel label="тип" value={type} setValue={setType} type="number" />
      <ListInputWithLabel label="ранги" items={ranks} setItems={setRanks} />
    </CreateOrEditPage>
  );
};
