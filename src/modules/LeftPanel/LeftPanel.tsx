import React from 'react';
import { PanelContainer, Header, RowsContainer, Row } from './styled';

export const LeftPanel = () => (
  <PanelContainer>
    <Header to="/admin">ADMIN PANEL</Header>

    <RowsContainer>
      <Row to="/admin" exact>
        Главная
      </Row>
      <Row to="/admin/players">Игроки</Row>
      <Row to="/admin/group">Группы</Row>
      <Row to="/admin/forum">Форум</Row>
    </RowsContainer>
  </PanelContainer>
);
