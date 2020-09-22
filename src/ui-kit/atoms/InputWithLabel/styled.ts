import styled from 'styled-components';

export const Wrapper = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & > span {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;
