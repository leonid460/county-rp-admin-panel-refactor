import React, { useState } from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';
import { createFaction } from 'api';
import { faction } from 'routes';
import { of } from 'utils';
import { InputWithLabel } from 'ui-kit/molecules';

function useDataProvider() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ranks, setRanks] = useState<string[]>([]);
  const [type, setType] = useState(NaN);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(createFaction({ id, name, ranks, type }));

    if (error) {
      setAsyncCallError(error.message);
    }
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
    asyncCallError
  };
}

export const CreateFaction = () => {
  const {
    id,
    setId,
    name,
    setName,
    type,
    setType,
    handleSubmit,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="create"
      handleSubmit={handleSubmit}
      asyncCallError={asyncCallError}
      goBackRoute={faction}
    >
      <InputWithLabel label="ID" value={id} setValue={setId} />
      <InputWithLabel label="имя фракции" value={name} setValue={setName} />
      <InputWithLabel label="тип" value={type} setValue={setType} type="number" />
    </CreateOrEditPage>
  );
};
