import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;

  & svg {
    width: 25px;
    height: 25px;

    & path {
      fill: ${({ theme }) => theme.colors.primaryButton.background};
    }
  }

  &:hover {
    & path {
      fill: ${({ theme }) => theme.colors.primaryButton.hoverBackground};
    }
  }
`;
