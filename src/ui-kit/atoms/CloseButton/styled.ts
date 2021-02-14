import styled from 'styled-components';
import { SvgCrossIcon } from 'ui-kit/atoms/Icons';

export const Container = styled.button`
  display: flex;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  padding: 5px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryButton.background};

    & > svg > path {
      fill: ${({ theme }) => theme.colors.primaryButton.color};
    }
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryButton.hoverBackground};

    & > svg > path {
      fill: ${({ theme }) => theme.colors.primaryButton.hoverColor};
    }
  }
`;

export const Icon = styled(SvgCrossIcon)`
  & > path {
    fill: ${({ theme }) => theme.colors.secondaryText};
  }
`;
