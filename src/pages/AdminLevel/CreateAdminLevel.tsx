import React, { useState } from 'react';
import { createAdminLevel } from 'api';
import { adminLevel } from 'routes';
import { CreateOrEditPage } from 'ui-kit/templates';
import { CheckboxWithLabel, InputWithLabel } from 'ui-kit/molecules';
import { of } from 'utils';

function useDataProvider() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [ban, setBan] = useState(false);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(createAdminLevel({ id, name, ban }));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  return {
    id,
    setId,
    name,
    setName,
    ban,
    setBan,
    handleSubmit,
    asyncCallError
  };
}

export const CreateAdminLevel = () => {
  const { id, setId, name, setName, ban, setBan, handleSubmit, asyncCallError } = useDataProvider();

  return (
    <CreateOrEditPage
      type="create"
      goBackRoute={adminLevel}
      handleSubmit={handleSubmit}
      asyncCallError={asyncCallError}
    >
      <InputWithLabel label="id" value={id} setValue={setId} />
      <InputWithLabel label="имя" value={name} setValue={setName} />
      <CheckboxWithLabel label="бан" value={ban} setValue={setBan} />
    </CreateOrEditPage>
  );
};
