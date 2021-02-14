import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  margin-top: 10px;

  & > * {
    margin-left: 12px;
  }
`;
