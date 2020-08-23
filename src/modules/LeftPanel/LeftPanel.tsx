import React from 'react';
import { PanelContainer, Header, RowsContainer, Row, MenuCloser } from './styled';
import * as routes from 'routes';
import { useStore } from 'stores';
import { observer } from 'mobx-react';

export const LeftPanel = observer(() => {
  const { leftPanelStore } = useStore();

  return (
    <PanelContainer isOpen={leftPanelStore.isOpen ? 1 : 0}>
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
});
