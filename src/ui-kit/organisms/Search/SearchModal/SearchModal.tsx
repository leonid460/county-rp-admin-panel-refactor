import React, { useEffect, useState } from 'react';
import { ModalWindow } from 'ui-kit/organisms';
import { PageSwitch } from 'ui-kit/molecules';
import { ISearchModalProps } from './types';
import { TSearchResultItem } from '../types';
import * as Styled from './styled';

export const SearchModal = ({ shouldShow, hide, getFilterBy, setValue }: ISearchModalProps) => {
  const [searchResultItems, setSearchResultItems] = useState<TSearchResultItem[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const handleSearch = async (query: string) => {
    const result = await getFilterBy(currentPage, query);

    setMaxPage(result.maxPage);
    setSearchResultItems(result.items);
    setCurrentPage(result.page);
  };

  const handleSearchButtonClick = () => {
    handleSearch(searchInput);
  };

  const handleClick = (item: TSearchResultItem) => {
    setValue(item);
    hide();
  };

  useEffect(() => {
    handleSearch('');
  }, []);

  return (
    <ModalWindow shouldShow={shouldShow} hide={hide}>
      <Styled.SearchInputWrapper>
        <Styled.Input value={searchInput} setValue={setSearchInput} />
        <Styled.Button onClick={handleSearchButtonClick}>Найти</Styled.Button>
      </Styled.SearchInputWrapper>
      <Styled.SearchResultsContainer>
        {searchResultItems.map((item) => (
          <Styled.SearchResultItem key={`${item.value}`} onClick={() => handleClick(item)}>
            {item.name}
          </Styled.SearchResultItem>
        ))}
      </Styled.SearchResultsContainer>
      <Styled.PageSwitcherWrapper>
        <PageSwitch maxPage={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </Styled.PageSwitcherWrapper>
    </ModalWindow>
  );
};
