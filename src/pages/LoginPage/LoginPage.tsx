import React from 'react';
import { LoginPageContainer } from './styled';
import { AuthForm } from 'modules/AuthForm';

export const LoginPage = () => {
  return (
    <LoginPageContainer>
      <AuthForm />
    </LoginPageContainer>
  );
};
