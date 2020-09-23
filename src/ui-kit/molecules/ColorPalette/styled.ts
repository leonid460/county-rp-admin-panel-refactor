import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  width: 300px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.container};
`;
