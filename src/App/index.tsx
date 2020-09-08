import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { GlobalStylesProvider } from './GlobalStylesWrapper';
import { LoginPage, Home, ProfilePage } from 'pages';
import { defaultTheme as theme } from 'themes';
import * as routes from 'routes';
import { storeWrapper } from 'store';
import { Notifications } from 'modules';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'store/authSlice';

export const AdminPanel: React.FC = storeWrapper(() => {
  useAuthCheck();

  return (
    <GlobalStylesProvider theme={theme}>
      <Switch>
        <Route exact path={routes.auth}>
          <LoginPage />
        </Route>
        <Route path={`${routes.profile}`}>
          <ProfilePage />
        </Route>
        <Route exact path={routes.root}>
          <Home />
        </Route>
        <Redirect to={routes.root} />
      </Switch>
      <Notifications timeout={7000} />
    </GlobalStylesProvider>
  );
});

function useAuthCheck() {
  const history = useHistory();
  const isAuthorized = useSelector(selectIsAuthorized);

  useEffect(() => {
    if (!isAuthorized && process.env.REACT_APP_AUTH_ON === 'true') {
      history.push(routes.auth);
    }
  }, [history, isAuthorized]);
}
