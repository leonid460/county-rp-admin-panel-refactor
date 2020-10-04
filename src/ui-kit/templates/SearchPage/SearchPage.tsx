import React, { useState } from 'react';
import { Base } from '../Base';
import * as Styled from './styled';
import { ActionButtons } from './ActionButtons';
import { Table } from './Table';
import { TTableRow } from './Table/types';
import { ISearchPageProps } from './types';
import { PrimaryButton, PageContentContainer } from 'ui-kit/atoms';
import { callNotification } from 'utils/callNotification';
import { PageSwitch } from './PageSwitch';
import { SmartForm, useSmartFormFields } from 'ui-kit/organisms/SmartForm';

export const SearchPage = ({
  actions,
  filterFields,
  apiCall,
  tableColumnNames
}: ISearchPageProps) => {
  const [modifiedFilterFields, filterState] = useSmartFormFields(filterFields);

  const [tableRows, setTableRows] = useState<TTableRow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const handleSearch = async (page: number): Promise<void> => {
    try {
      const response = await apiCall(page, filterState);
      setTableRows(response.items.map((row) => Object.values(row)));
      setMaxPage(response.maxPage);
      setCurrentPage(response.page);
    } catch (error) {
      callNotification({ type: 'error', header: 'Ошибка', content: error.message });
    }
  };

  const handlePageSwitch = (newPageNumber: number) => {
    handleSearch(newPageNumber);
  };

  return (
    <Base>
      <PageContentContainer>
        <ActionButtons actions={actions} />
        <Styled.Subtitle>Фильтр</Styled.Subtitle>
        <SmartForm fields={modifiedFilterFields} />
        <Styled.ContainerForFindButton>
          <PrimaryButton onClick={() => handleSearch(currentPage)}>Найти</PrimaryButton>
        </Styled.ContainerForFindButton>
        <Styled.Separator />
        <Table rows={tableRows} columnNames={tableColumnNames} />
        {maxPage > 1 && (
          <PageSwitch
            maxPage={maxPage}
            currentPage={currentPage}
            setCurrentPage={handlePageSwitch}
          />
        )}
      </PageContentContainer>
    </Base>
  );
};
