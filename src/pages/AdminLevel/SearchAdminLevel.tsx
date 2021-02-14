import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getAdminLevelFilterBy } from 'api';
import { createAdminLevel, editAdminLevel } from 'routes';

export const SearchAdminLevel = () => {
  return (
    <SearchPage
      actions={[
        {
          name: 'Создать',
          route: createAdminLevel
        }
      ]}
      filterFields={[
        { key: 'id', name: 'ID', type: 'text' },
        { key: 'name', name: 'имя', type: 'text' }
      ]}
      apiCall={getAdminLevelFilterBy}
      tableColumnsHeads={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Имя' },
        { key: 'ban', name: 'Бан' }
      ]}
      editRoute={editAdminLevel}
    />
  );
};
