import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { GlobalStylesProvider } from './GlobalStylesWrapper';
import {
  Login,
  Home,
  Profile,
  TestRoom,
  SearchPlayers,
  CreatePlayer,
  EditPlayer,
  SearchGroups,
  CreateGroup,
  EditGroup,
  SearchPerson,
  EditPerson,
  SearchFaction,
  EditFaction,
  CreateFaction,
  SearchAdminLevel,
  CreateAdminLevel,
  EditAdminLevel,
  SearchLog
} from 'pages';
import { defaultTheme as theme } from 'themes';
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
        <Route path={routes.testRoom}>
          <TestRoom />
        </Route>

        <Route exact path={routes.players}>
          <SearchPlayers />
        </Route>
        <Route path={`${routes.createPlayer}`}>
          <CreatePlayer />
        </Route>
        <Route path={`${routes.editPlayer}`}>
          <EditPlayer />
        </Route>

        <Route exact path={routes.group}>
          <SearchGroups />
        </Route>
        <Route path={`${routes.createGroup}`}>
          <CreateGroup />
        </Route>
        <Route path={`${routes.editGroup}`}>
          <EditGroup />
        </Route>

        <Route exact path={routes.person}>
          <SearchPerson />
        </Route>
        <Route path={`${routes.editPerson}`}>
          <EditPerson />
        </Route>

        <Route exact path={routes.faction}>
          <SearchFaction />
        </Route>
        <Route path={`${routes.createFaction}`}>
          <CreateFaction />
        </Route>
        <Route path={`${routes.editFaction}`}>
          <EditFaction />
        </Route>

        <Route exact path={routes.adminLevel}>
          <SearchAdminLevel />
        </Route>
        <Route path={`${routes.createAdminLevel}`}>
          <CreateAdminLevel />
        </Route>
        <Route path={`${routes.editAdminLevel}`}>
          <EditAdminLevel />
        </Route>

        <Route exact path={routes.log}>
          <SearchLog />
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
