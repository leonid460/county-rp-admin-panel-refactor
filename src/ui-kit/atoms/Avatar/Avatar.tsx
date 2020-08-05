import React from 'react';
import { AvatarContainer } from './styled';
import { IAvatarProps } from './types';
import { invertColor, makeColorFromString } from 'utils';

export const Avatar: React.FC<IAvatarProps> = ({ className, children }) => {
  const text = children.toString();
  const backgroundColor = makeColorFromString(text);
  const textColor = invertColor(backgroundColor);

  return (
    <AvatarContainer className={className} textColor={textColor} backgroundColor={backgroundColor}>
      {text.slice(0, 2).toUpperCase()}
    </AvatarContainer>
  );
};
