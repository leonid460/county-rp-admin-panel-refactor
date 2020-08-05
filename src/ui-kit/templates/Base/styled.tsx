import styled from 'styled-components';
import { ITheme } from 'types';

export const PageMainPart = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div<{ theme: ITheme }>`
  width: 100%;
  height: 100%;

  overflow: auto;
  background: ${({ theme }) => theme.colors.background};
`;
