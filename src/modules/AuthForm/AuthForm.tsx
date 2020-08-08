import React from 'react';
import { FormContainer } from './styled';
import { H1, Input, PrimaryButton } from 'ui-kit/atoms';
import { observer } from 'mobx-react';
import { useStore } from 'stores';
import { useHistory } from 'react-router-dom';
import { root } from 'routes';

export const AuthForm = observer(() => {
  const { authStore } = useStore();
  const history = useHistory();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await authStore.login();

      if (authStore.isAuthorized) history.push(root);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <FormContainer>
      <H1>Добро пожаловать!</H1>
      <Input value={authStore.username} setValue={authStore.setUsername} placeholder="User Name" />
      <Input
        type="password"
        value={authStore.password}
        setValue={authStore.setPassword}
        placeholder="Password"
      />
      <PrimaryButton as={'input'} type="submit" value="Войти" onClick={handleLogin} />
    </FormContainer>
  );
});
