import React from 'react';
import * as Styled from './styled';
import { Avatar } from 'ui-kit/atoms';

export const AvatarArea = ({ username }: { username: string }) => (
  <Styled.AvatarArea>
    <Avatar size={150}>{username}</Avatar>
  </Styled.AvatarArea>
);
