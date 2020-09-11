import styled from 'styled-components';
import { ITheme } from 'types';

export const UserInfoArea = styled.div`
  width: 100%;
`;

export const UserName = styled.h1<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 30px;
  font-size: 24px;
`;
