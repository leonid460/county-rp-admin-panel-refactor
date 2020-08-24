import React from 'react';
import { MiniProfileWrapper, MiniProfileMenuItem } from './styled';
import { NavLink } from 'react-router-dom';
import { iMiniProfileProps } from '../types';
import { Avatar } from 'ui-kit/atoms';
import { PopUp } from 'ui-kit/molecules/PopUp';
import { profile } from 'routes';

export const MiniProfile: React.FC<iMiniProfileProps> = ({ username, logout }) => (
  <PopUp openerContent={<Avatar>{username}</Avatar>}>
    <MiniProfileWrapper>
      <MiniProfileMenuItem as={NavLink} to={`${profile}`}>
        Профиль
      </MiniProfileMenuItem>

      <MiniProfileMenuItem as={NavLink} to="/admin" onClick={() => logout()}>
        Выйти
      </MiniProfileMenuItem>
    </MiniProfileWrapper>
  </PopUp>
);
