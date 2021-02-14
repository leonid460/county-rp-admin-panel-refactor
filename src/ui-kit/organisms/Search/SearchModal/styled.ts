import styled from 'styled-components';
import { Input as OriginalInput, PrimaryButton } from 'ui-kit/atoms';

export const SearchInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
`;

export const Input = styled(OriginalInput)`
  height: unset;
  flex-grow: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Button = styled(PrimaryButton)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SearchResultItem = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.container};
  color: ${({ theme }) => theme.colors.primaryText};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.container};
    background: ${({ theme }) => theme.colors.highlight};
  }

  transition: 0.1s background ease;
`;

export const PageSwitcherWrapper = styled.div``;
