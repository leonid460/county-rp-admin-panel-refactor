import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuthorized, selectError, login } from 'store/authSlice';
import { FormContainer } from './styled';
import { H1, Input, PrimaryButton } from 'ui-kit/atoms';
import { useHistory } from 'react-router-dom';
import { root } from 'routes';
import { callNotification } from 'utils/callNotification';

export const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const isAuthorized = useSelector(selectIsAuthorized);
  const error = useSelector(selectError);
  const history = useHistory();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    dispatch(login({ username, password }));
  };

  useEffect(() => {
    if (isAuthorized) {
      history.push(root);
      callNotification({
        header: 'Добро пожаловать',
        content: 'Хеллоу =^.^=',
        type: 'info'
      });
    }
  }, [isAuthorized]);

  useEffect(() => {
    if (error) {
      callNotification({
        header: 'Ошибка',
        content: error.message,
        type: 'error'
      });
    }
  }, [error]);

  return (
    <FormContainer>
      <H1>Добро пожаловать!</H1>
      <Input value={username} setValue={setUsername} placeholder="User Name" />
      <Input value={password} setValue={setPassword} placeholder="Password" type="password" />
      <PrimaryButton as={'input'} type="submit" value="Войти" onClick={handleLogin} />
    </FormContainer>
  );
};
