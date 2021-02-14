import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getFactionFilterBy } from 'api';
import * as routes from 'routes';

export const SearchFaction = () => {
  return (
    <SearchPage
      actions={[{ name: 'Создать', route: routes.createFaction }]}
      filterFields={[
        { name: 'ID', key: 'id', type: 'text' },
        { name: 'имя фракции', key: 'name', type: 'text' }
      ]}
      apiCall={getFactionFilterBy}
      tableColumnsHeads={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Имя' },
        { key: 'type', name: 'Тип' }
      ]}
      editRoute={routes.editFaction}
    />
  );
};
