import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getPlayerFilterBy } from 'api';

export const Players = () => {
  const actions = [
    {
      name: 'Создать',
      route: '/create'
    }
  ];

  const filterFields = [
    {
      name: 'Логин',
      propKey: 'login'
    }
  ];

  const tableColumnNames = ['ID', 'Логин', 'Группа'];

  return (
    <SearchPage
      actions={actions}
      filterFields={filterFields}
      apiCall={getPlayerFilterBy}
      tableColumnNames={tableColumnNames}
    />
  );
};
