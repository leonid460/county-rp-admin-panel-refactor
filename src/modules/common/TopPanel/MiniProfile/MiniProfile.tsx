import React from 'react';
import * as Styled from './styled';
import { NavLink } from 'react-router-dom';
import { iMiniProfileProps } from '../types';
import { Avatar } from 'ui-kit/atoms';
import { PopUp } from 'ui-kit/molecules/PopUp';
import { profile } from 'routes';

export const MiniProfile: React.FC<iMiniProfileProps> = ({ username, logout }) => (
  <PopUp openerContent={<Avatar>{username}</Avatar>}>
    <Styled.MiniProfileWrapper>
      <Styled.MiniProfileMenuItem as={NavLink} to={`${profile}/${username}`}>
        Профиль
      </Styled.MiniProfileMenuItem>

      <Styled.MiniProfileMenuItem as={NavLink} to="/admin" onClick={() => logout()}>
        Выйти
      </Styled.MiniProfileMenuItem>
    </Styled.MiniProfileWrapper>
  </PopUp>
);
