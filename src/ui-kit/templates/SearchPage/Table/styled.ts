import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  border-radius: 4px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.container};
`;
