import React from 'react';
import styled from 'styled-components';
import BlueButton from 'AdminPanel/components/atoms/BlueButton';
import Header3 from 'AdminPanel/components/atoms/Header3';
import FormContainer from 'AdminPanel/components/atoms/FormContainer';
import FormRow from 'AdminPanel/components/atoms/FormRow';
import HorizontalRule from 'AdminPanel/components/atoms/HorizontalRule';
import {Table as SearchResultsTable} from './__styled/Table';
import Base from 'AdminPanel/components/templates/Base';

type CategoryPageProps = {
  topButtons?: React.ReactNode;
  inputRows: {
    name: string;
    innerComponent: React.ReactNode;
  }[];
  handleSearch(pageNumber: number): void;
  searchTableProps: {
    headers: string[];
    searchResultsItems: string[][];
    editRoute: string;
    maxPage: number;
    pageNumber: number;
  };
};

function CategoryPage(props: CategoryPageProps) {
  const {topButtons, inputRows, handleSearch, searchTableProps} = props;

  const handleForwardButton = () => {
    const pageNumber = searchTableProps.pageNumber;
    let nextPageNumber = pageNumber;
    const maxPage = searchTableProps.maxPage;

    if (pageNumber < maxPage) {
      nextPageNumber++;
    }

    handleSearch(nextPageNumber);
  };

  const handleBackButton = () => {
    const pageNumber = searchTableProps.pageNumber;
    let previousPageNumber = pageNumber;

    if (pageNumber > 1) {
      previousPageNumber--;
    }

    handleSearch(previousPageNumber);
  };

  return (
    <Base>
      <Container>
        {topButtons}
        <Header3>Фильтр</Header3>
        <FormContainer>
          {inputRows.map(({name, innerComponent}, key) => (
            <FormRow name={name} key={key}>
              {innerComponent}
            </FormRow>
          ))}
        </FormContainer>
        <SearchButton onClick={() => handleSearch(searchTableProps.pageNumber)}>
          Найти
        </SearchButton>
        <HorizontalRule />
        <SearchResultsTable {...searchTableProps} />
        <ButtonsContainer>
          <BackButton onClick={handleBackButton} />
          <span>
            {searchTableProps.pageNumber}..{searchTableProps.maxPage}
          </span>
          <ForwardButton onClick={handleForwardButton} />
        </ButtonsContainer>
      </Container>
    </Base>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  box-sizing: border-box;
  padding: 50px;
`;

const SearchButton = styled(BlueButton)`
  margin-left: auto;
  margin-right: 40px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 25px;
  padding-right: 29px;
  color: blue;
`;

const ForwardButton = styled.button`
  width: 15px;
  height: 15px;

  border: none;
  border-top: 2px blue solid;
  border-right: 2px blue solid;
  outline: none;

  background: none;

  transform: rotate(45deg);

  cursor: pointer;
`;

const BackButton = styled(ForwardButton)`
  transform: rotate(-135deg);
`;

export default CategoryPage;
