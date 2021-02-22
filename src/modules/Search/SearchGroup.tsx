import { adaptFilterBy, SearchWithLabel } from 'ui-kit/organisms';
import { getGroupsFilterBy } from 'api';
import React from 'react';

export interface ISearchEntityProps {
  currentItem: { name: string; value: string } | null;
  setCurrentItem: (newItem: { name: string; value: string } | null) => void;
}

export const SearchGroup = ({ currentItem, setCurrentItem }: ISearchEntityProps) => {
  const adaptedGetGroupsFilterBy = adaptFilterBy(getGroupsFilterBy, {
    initData: { name: '' },
    mainParamKey: 'name',
    nameParamKey: 'name',
    valueParamKey: 'id'
  });

  return (
    <SearchWithLabel
      label="группа"
      getFilterBy={adaptedGetGroupsFilterBy}
      currentItem={currentItem}
      setCurrentItem={setCurrentItem}
    />
  );
};
