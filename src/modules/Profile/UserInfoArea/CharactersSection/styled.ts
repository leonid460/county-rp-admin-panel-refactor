import styled from 'styled-components';
import { ITheme } from 'types';

export const CharactersSectionWrapper = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 10px;
  padding-top: 10px;
  width: 100%;
`;

export const CharactersSectionDescription = styled.h2<{ theme: ITheme }>`
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const CharactersSectionRow = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const CharactersSectionCell = styled.div<{ theme: ITheme }>`
  width: calc(100% / 3);
  padding: 10px;

  border-right: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-right: none;
  }

  & li {
    margin: 5px 0;
  }
`;

export const CharactersSectionHeaderCell = styled(CharactersSectionCell)<{ theme: ITheme }>`
  background: ${({ theme }) => theme.colors.highlight};

  text-align: center;
  padding: 15px;
  color: ${({ theme }) => theme.colors.contrastText};

  border: none;
`;
