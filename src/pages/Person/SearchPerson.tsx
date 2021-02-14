import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getPersonFilterBy } from 'api';
import { editPerson } from 'routes';

export const SearchPerson = () => (
  <SearchPage
    actions={[]}
    filterFields={[
      {
        name: 'имя',
        key: 'name',
        type: 'text'
      }
    ]}
    apiCall={getPersonFilterBy}
    tableColumnsHeads={[
      { key: 'id', name: 'ID' },
      { key: 'name', name: 'Имя' },
      { key: 'factionId', name: 'ID фракции' },
      { key: 'rank', name: 'Ранг' },
      { key: 'groupId', name: 'ID Группы' }
    ]}
    editRoute={editPerson}
  />
);
