import styled from 'styled-components';
import { ITheme } from 'types';
import { H1 } from 'ui-kit/atoms';

export const FormContainer = styled.form<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  border-radius: 1%;
  box-sizing: border-box;
  padding: 30vh 10px;

  background: ${({ theme }) => theme.colors.container};
  color: #444343;

  animation: slide-up 0.4s ease;

  ${H1} {
    text-align: center;
  }

  ${({ theme }) => `
    @media ${theme.device.tablet} {
      width: 500px;
      height: 500px;
      padding: 84px 0;
    }
  `};
`;
