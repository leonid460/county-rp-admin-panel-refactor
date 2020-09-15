import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
