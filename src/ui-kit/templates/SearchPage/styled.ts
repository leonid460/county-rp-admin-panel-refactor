import styled from 'styled-components';
import { ITheme } from 'types';

export const Subtitle = styled.h2<{ theme: ITheme }>`
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 30px;
  color: ${({ theme }) => theme.colors.secondaryText};
  ${({ theme }) => theme.typography.subtitle1}
`;

export const ContainerForFindButton = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const Separator = styled.div<{ theme: ITheme }>`
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background: ${({ theme }) => theme.colors.border};
`;
