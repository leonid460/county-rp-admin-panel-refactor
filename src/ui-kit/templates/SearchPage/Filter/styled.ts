import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 20px 0;
`;

export const FilterItem = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 15px;

  & > span {
    margin-right: 20px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;
