import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsOpen, toggle } from 'store/leftPanelSlice';
import { PanelContainer, Header, RowsContainer, Row, MenuCloser } from './styled';
import * as routes from 'routes';

const leftPanelRows = [
  { name: 'Главная', to: routes.root, exact: true },
  { name: 'Игроки', to: routes.players },
  { name: 'Группы', to: routes.group },
  { name: 'Форум', to: routes.forum }
];

export const LeftPanel = () => {
  const dispatch = useDispatch();
  const toggleLeftPanel = () => dispatch(toggle());
  const isOpen = useSelector(selectIsOpen);

  return (
    <PanelContainer isOpen={isOpen ? 1 : 0}>
      <Header to={routes.root} onClick={toggleLeftPanel}>
        ADMIN PANEL
      </Header>

      <RowsContainer>
        {leftPanelRows.map(({ name, to, exact }) => (
          <Row key={name} exact={exact} to={to} onClick={toggleLeftPanel}>
            {name}
          </Row>
        ))}
      </RowsContainer>
      <MenuCloser />
    </PanelContainer>
  );
};
