import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { GlobalStylesProvider } from './GlobalStylesWrapper';
import { Login, Home, Profile, SearchPlayers, CreatePlayer } from 'pages';
import { darkTheme as theme } from 'themes';
import * as routes from 'routes';
import { withStore } from 'store';
import { Notifications } from 'modules/common';
import { useSelector } from 'react-redux';
import { selectIsAuthorized } from 'store/authSlice';

export const AdminPanel: React.FC = withStore(() => {
  useAuthCheck();

  return (
    <GlobalStylesProvider theme={theme}>
      <Switch>
        <Route exact path={routes.auth}>
          <Login />
        </Route>
        <Route path={`${routes.profile}/:login`}>
          <Profile />
        </Route>
        <Route exact path={routes.root}>
          <Home />
        </Route>

        <Route exact path={routes.players}>
          <SearchPlayers />
        </Route>
        <Route path={`${routes.createPlayer}`}>
          <CreatePlayer />
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
