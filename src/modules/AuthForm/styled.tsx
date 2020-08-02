import styled from 'styled-components';
import { ITheme } from 'types';

export const FormContainer = styled.form<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 500px;
  height: 500px;
  border-radius: 1%;
  box-sizing: border-box;
  padding: 84px 0;

  background: ${({ theme }) => theme.colors.container};
  color: #444343;

  animation: slide-up 0.4s ease;
`;
