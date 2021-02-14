import React from 'react';
import { FormContainer } from 'ui-kit/atoms';
import * as Styled from './styled';
import { IFormProps } from './types';

export const Form: React.FC<IFormProps> = ({ children, renderButtons }) => (
  <>
    <FormContainer>{children}</FormContainer>
    <Styled.ButtonsContainer>{renderButtons()}</Styled.ButtonsContainer>
  </>
);
