import styled from 'styled-components';
import { SectionContainer } from 'ui-kit/atoms';

export const FormContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  min-height: 400px;
  padding: 24px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
