import React from 'react';
import { SearchPage } from 'ui-kit/templates';
import { getLogFilterBy } from 'api';

export const SearchLog = () => {
  return (
    <SearchPage
      actions={[]}
      filterFields={[
        { key: 'login', name: 'логин', type: 'text' },
        { key: 'ip', name: 'IP', type: 'text' },
        { key: 'actionId', name: 'action ID', type: 'number' },
        { key: 'commentPart', name: 'коммент', type: 'text' }
      ]}
      apiCall={getLogFilterBy}
      tableColumnsHeads={[
        { key: 'id', name: 'ID' },
        { key: 'login', name: 'Логин' },
        { key: 'ip', name: 'IP' },
        { key: 'dateTime', name: 'Дата' },
        { key: 'comment', name: 'Коммент' }
      ]}
    />
  );
};
