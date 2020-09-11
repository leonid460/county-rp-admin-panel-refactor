import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsOpen } from 'store/leftPanelSlice';
import { PanelContainer, Header, RowsContainer, Row, MenuCloser } from './styled';
import * as routes from 'routes';

export const LeftPanel = () => {
  const isOpen = useSelector(selectIsOpen);

  return (
    <PanelContainer isOpen={isOpen ? 1 : 0}>
      <Header to={routes.root}>ADMIN PANEL</Header>

      <RowsContainer>
        <Row to={routes.root} exact>
          Главная
        </Row>
        <Row to={routes.players}>Игроки</Row>
        <Row to={routes.group}>Группы</Row>
        <Row to={routes.forum}>Форум</Row>
      </RowsContainer>
      <MenuCloser />
    </PanelContainer>
  );
};
