import React from 'react';
import { LoginPageContainer } from './styled';
import { AuthForm } from 'modules/Login';

export const Login = () => {
  return (
    <LoginPageContainer>
      <AuthForm />
    </LoginPageContainer>
  );
};
