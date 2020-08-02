import styled from 'styled-components';
import { ITheme } from 'types';

import { PageContainer } from 'ui-kit/atoms';

export const LoginPageContainer = styled(PageContainer)<{ theme: ITheme }>`
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.gradient};
`;
