import React, { useState } from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';
import { createGroup } from 'api';
import { group } from 'routes';
import { of } from 'utils';
import { InputWithLabel, CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPickerWithLabel } from 'ui-kit/organisms';
import { useHistory } from 'react-router-dom';

function useDataProvider() {
  const history = useHistory();
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [permissions, setPermissions] = useState(false);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(createGroup({ id, name, color, adminPanel: permissions }));

    if (error) {
      setAsyncCallError(error.message);
    } else {
      setAsyncCallError('');
      handleGoBack();
    }
  };

  const handleGoBack = () => {
    history.push(group);
  };

  return {
    id,
    setId,
    name,
    setName,
    color,
    setColor,
    permissions,
    setPermissions,
    handleSubmit,
    handleGoBack,
    asyncCallError
  };
}

export const CreateGroup = () => {
  const {
    id,
    setId,
    name,
    setName,
    color,
    setColor,
    permissions,
    setPermissions,
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
      <InputWithLabel label="имя группы" value={name} setValue={setName} />
      <PopUpColorPickerWithLabel label="цвет" value={color} setValue={setColor} />
      <CheckboxWithLabel
        label="права на Админ Панель"
        value={permissions}
        setValue={setPermissions}
      />
    </CreateOrEditPage>
  );
};
