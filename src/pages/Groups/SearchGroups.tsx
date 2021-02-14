import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getGroupsFilterBy } from 'api';
import { createGroup, editGroup } from 'routes';

export const SearchGroups = () => {
  return (
    <SearchPage
      actions={[{ name: 'Создать', route: createGroup }]}
      filterFields={[
        { name: 'ID', key: 'id', type: 'text' },
        { name: 'имя группы', key: 'name', type: 'text' }
      ]}
      apiCall={getGroupsFilterBy}
      tableColumnsHeads={[
        { key: 'id', name: 'ID' },
        { key: 'name', name: 'Имя группы' }
      ]}
      editRoute={editGroup}
    />
  );
};
