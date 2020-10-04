import React from 'react';
import { editPlayer } from 'api';
import { CreateOrEditPage } from 'ui-kit/templates';
import { IPlayer } from 'types';

export const EditPlayer = () => (
  <CreateOrEditPage<IPlayer>
    type="edit"
    apiCall={editPlayer}
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
      }
    ]}
  />
);
