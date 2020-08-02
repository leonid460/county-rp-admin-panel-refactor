import styled from 'styled-components';
import { ITheme } from 'types';

export const H1 = styled.h1<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.primaryText};
`;
