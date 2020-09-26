import styled from 'styled-components';
import { ITheme } from 'types';

export const PageMainPart = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  ${({ theme }) => `
    @media ${theme.device.laptop} {
      padding-left: 350px;
      padding-top: 80px;
    }
  `}
`;

export const ContentWrapper = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  overflow: auto;
  background: ${({ theme }) => theme.colors.background};
`;
