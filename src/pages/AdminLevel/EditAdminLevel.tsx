import React, { useEffect, useState } from 'react';
import { getAdminLevel, deleteAdminLevel, editAdminLevel } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { adminLevel } from 'routes';
import { useHistory } from 'react-router-dom';
import { getEntityIdFromUrl, of } from 'utils';
import { CheckboxWithLabel, InputWithLabel } from 'ui-kit/molecules';

function useDataProvider() {
  const history = useHistory();
  const pathName = history.location.pathname;

  const [id, setId] = useState(getEntityIdFromUrl(pathName));
  const [name, setName] = useState('');
  const [ban, setBan] = useState(false);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(editAdminLevel({ id, name, ban }));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleDelete = async () => {
    const { error } = await of(deleteAdminLevel(id));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleGoBack = () => {
    history.push(adminLevel);
  };

  useEffect(() => {
    (async () => {
      const result = await of(getAdminLevel(id));

      if (result.error) {
        setAsyncCallError(result.error.message);

        return;
      }

      const { data } = result;

      setName(data.name);
      setBan(data.ban);
    })();
  }, [id]);

  return {
    id,
    setId,
    name,
    setName,
    ban,
    setBan,
    handleSubmit,
    handleDelete,
    handleGoBack,
    asyncCallError
  };
}

export const EditAdminLevel = () => {
  const {
    id,
    setId,
    name,
    setName,
    ban,
    setBan,
    handleSubmit,
    handleDelete,
    handleGoBack,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="edit"
      handleGoBack={handleGoBack}
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      asyncCallError={asyncCallError}
    >
      <InputWithLabel label="id" value={id} setValue={setId} />
      <InputWithLabel label="имя" value={name} setValue={setName} />
      <CheckboxWithLabel label="бан" value={ban} setValue={setBan} />
    </CreateOrEditPage>
  );
};
