import React from 'react';
import { CreateOrEditPage } from 'ui-kit/templates';
import { IPlayer } from 'types';
import { createPlayer } from 'api';

export const CreatePlayer = () => {
  return (
    <CreateOrEditPage<IPlayer>
      type="create"
      apiCall={(data) => createPlayer(data)}
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
          type: 'select',
          options: [
            { name: 'Groove Str.', key: 'groove' },
            { name: 'Ballas', key: 'ballas' }
          ]
        },
        {
          name: 'Модератор',
          key: 'isModer',
          type: 'checkbox'
        },
        {
          name: 'Цвет',
          key: 'color',
          type: 'color'
        }
      ]}
    />
  );
};
