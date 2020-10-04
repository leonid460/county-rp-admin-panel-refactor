import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getPlayerFilterBy } from 'api';
import { createPlayer, editPlayer } from 'routes';

export const SearchPlayers = () => {
  return (
    <SearchPage
      actions={[
        {
          name: 'Создать',
          route: createPlayer
        }
      ]}
      filterFields={[
        {
          name: 'Логин',
          key: 'login',
          type: 'text'
        }
      ]}
      apiCall={getPlayerFilterBy}
      tableColumnNames={['ID', 'Логин', 'Пароль', 'Группа']}
      editRoute={editPlayer}
    />
  );
};
