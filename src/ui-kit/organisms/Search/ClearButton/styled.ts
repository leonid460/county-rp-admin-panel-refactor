import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  border: none;
  outline: none;
  opacity: 0.5;
  background: none;
  cursor: pointer;

  & > svg > path {
    fill: ${({ theme }) => theme.colors.input.text};
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.2;
  }
`;
