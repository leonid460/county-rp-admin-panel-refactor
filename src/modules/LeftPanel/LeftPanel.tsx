import React from 'react';
import { PanelContainer, Header, RowsContainer, Row } from './styled';
import * as routes from 'routes';

export const LeftPanel = () => (
  <PanelContainer>
    <Header to={routes.root}>ADMIN PANEL</Header>

    <RowsContainer>
      <Row to={routes.root} exact>
        Главная
      </Row>
      <Row to={routes.players}>Игроки</Row>
      <Row to={routes.group}>Группы</Row>
      <Row to={routes.forum}>Форум</Row>
    </RowsContainer>
  </PanelContainer>
);
