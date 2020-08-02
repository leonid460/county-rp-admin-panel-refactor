import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { GlobalStylesProvider } from './GlobalStylesWrapper';
import { LoginPage } from 'pages';
import { defaultTheme } from 'themes';
import * as routes from 'routes';
import { storeWrapper, useStore } from 'stores';
import { observer } from 'mobx-react';

export const AdminPanel: React.FC = storeWrapper(
  observer(() => {
    useAuthCheck();

    return (
      <GlobalStylesProvider theme={defaultTheme}>
        <Switch>
          <Route path={routes.auth} component={LoginPage} />

          <Redirect to={routes.auth} />
        </Switch>
      </GlobalStylesProvider>
    );
  })
);

function useAuthCheck() {
  const { authStore } = useStore();
  const history = useHistory();
  const isAuthorized = authStore.isAuthorized;

  useEffect(() => {
    if (!isAuthorized && process.env.REACT_APP_DEV_MODE === 'false') {
      history.push(routes.auth);
    }
  }, [history, isAuthorized]);
}
