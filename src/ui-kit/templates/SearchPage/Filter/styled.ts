import styled from 'styled-components';
import { ITheme } from 'types';
import { InputWithLabel } from 'ui-kit/molecules';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  margin: 20px 0;
`;

export const FilterItem = styled(InputWithLabel)<{ theme: ITheme }>`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;
