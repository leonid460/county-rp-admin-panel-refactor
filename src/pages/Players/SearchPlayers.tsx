import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getPlayerFilterBy } from 'api';
import { createPlayer, editPlayer } from 'routes';

export const SearchPlayers = () => {
  return (
    <SearchPage
      actions={[{ name: 'Создать', route: createPlayer }]}
      filterFields={[{ key: 'login', name: 'логин', type: 'text' }]}
      apiCall={getPlayerFilterBy}
      tableColumnsHeads={[
        { key: 'id', name: 'ID' },
        { key: 'login', name: 'Логин' },
        { key: 'password', name: 'Пароль' }
      ]}
      editRoute={editPlayer}
    />
  );
};
