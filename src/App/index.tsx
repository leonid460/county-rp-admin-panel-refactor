import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import { GlobalStylesProvider } from './GlobalStylesWrapper';
import { LoginPage, Home } from 'pages';
import { darkTheme as theme } from 'themes';
import * as routes from 'routes';
import { storeWrapper, useStore } from 'stores';
import { Notifications } from 'modules';

export const AdminPanel: React.FC = storeWrapper(
  observer(() => {
    useAuthCheck();

    return (
      <GlobalStylesProvider theme={theme}>
        <Switch>
          <Route exact path={routes.auth}>
            <LoginPage />
          </Route>
          <Route exact path={routes.root}>
            <Home />
          </Route>

          <Redirect to={routes.root} />
        </Switch>
        <Notifications timeout={700000} />
      </GlobalStylesProvider>
    );
  })
);

function useAuthCheck() {
  const { authStore } = useStore();
  const history = useHistory();
  const isAuthorized = authStore.isAuthorized;

  useEffect(() => {
    if (!isAuthorized && process.env.REACT_APP_AUTH_ON === 'true') {
      history.push(routes.auth);
    }
  }, [history, isAuthorized]);
}
