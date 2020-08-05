import React from 'react';
import { TextRow } from './styled';
import { NavLink } from 'react-router-dom';
import { iMiniProfileProps } from './types';
import { Avatar } from 'ui-kit/atoms';

export const MiniProfile: React.FC<iMiniProfileProps> = ({ username, logout }) => (
  <>
    <TextRow as={NavLink} to={`/admin/profile/${username}`}>
      {username}
    </TextRow>
    <Avatar>{username}</Avatar>
    <TextRow as={NavLink} to="/admin" onClick={() => logout()}>
      Выйти
    </TextRow>
  </>
);
