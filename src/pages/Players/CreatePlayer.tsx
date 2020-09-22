import React from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';

export const CreatePlayer = () => {
  return (
    <CreateOrEditPage
      fields={[
        {
          name: 'Логин',
          key: 'login',
          type: 'text'
        },
        {
          name: 'Пароль',
          key: 'password',
          type: 'text'
        },
        {
          name: 'Группа',
          key: 'group',
          type: 'text'
        }
      ]}
    />
  );
};
