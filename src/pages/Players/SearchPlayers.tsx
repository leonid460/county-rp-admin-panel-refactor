import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getPlayerFilterBy } from 'api';
import { createPlayer, editPlayer } from 'routes';

export const SearchPlayers = () => {
  const actions = [
    {
      name: 'Создать',
      route: createPlayer
    }
  ];

  const filterFields = [
    {
      name: 'Логин',
      propKey: 'login'
    }
  ];

  const tableColumnNames = ['ID', 'Логин', 'Пароль', 'Группа'];

  return (
    <SearchPage
      actions={actions}
      filterFields={filterFields}
      apiCall={getPlayerFilterBy}
      tableColumnNames={tableColumnNames}
      editRoute={editPlayer}
    />
  );
};
