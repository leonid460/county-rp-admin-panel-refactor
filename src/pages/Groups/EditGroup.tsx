import React, { useEffect, useState } from 'react';
import { editGroup, getGroup, deleteGroup } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { group } from 'routes';
import { getEntityIdFromUrl, of } from 'utils';
import { useHistory } from 'react-router-dom';
import { CheckboxWithLabel, InputWithLabel } from 'ui-kit/molecules';
import { PopUpColorPickerWithLabel } from 'ui-kit/organisms';

function useDataProvider() {
  const history = useHistory();
  const pathName = history.location.pathname;
  const [id, setId] = useState(getEntityIdFromUrl(pathName));
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [permissions, setPermissions] = useState(false);
  const [asyncCallError, setAsyncCallError] = useState('');

  const handleSubmit = async () => {
    const { error } = await of(editGroup({ id, name, color, adminPanel: permissions }));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  const handleDelete = async () => {
    const { error } = await of(deleteGroup(id));

    if (error) {
      setAsyncCallError(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      const result = await of(getGroup(id));

      if (result.error) {
        setAsyncCallError(result.error.message);

        return;
      }

      const { name, adminPanel, color } = result.data;

      setName(name);
      setColor(color);
      setPermissions(adminPanel);
    })();
  }, [id]);

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
    handleDelete,
    asyncCallError
  };
}

export const EditGroup = () => {
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
    handleDelete,
    asyncCallError
  } = useDataProvider();

  return (
    <CreateOrEditPage
      type="edit"
      handleSubmit={handleSubmit}
      handleDelete={handleDelete}
      asyncCallError={asyncCallError}
      goBackRoute={group}
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
