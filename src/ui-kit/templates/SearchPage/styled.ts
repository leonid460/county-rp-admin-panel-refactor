import styled from 'styled-components';
import { ITheme } from 'types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 35px;
`;

export const Subtitle = styled.h2<{ theme: ITheme }>`
  margin-top: 30px;
  padding-left: 30px;

  color: ${({ theme }) => theme.colors.secondaryText};

  ${({ theme }) => theme.typography.subtitle1}
`;

export const ContainerForFindButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  width: 100%;
`;

export const Separator = styled.div<{ theme: ITheme }>`
  width: 100%;
  height: 2px;
  margin: 20px 0;
  background: ${({ theme }) => theme.colors.border};
`;
