import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-radius: 3px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    & path {
      fill: ${({ theme }) => theme.colors.primaryButton.hoverBackground};
    }
  }
`;

export const Svg = styled.svg`
  & > path {
    fill: ${({ theme }) => theme.colors.primaryButton.background};
  }
`;
