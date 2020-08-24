import React from 'react';

export interface IAvatarContainerProps {
  textColor: string;
  backgroundColor: string;
  size: number;
  children: React.ReactText;
}

export interface IAvatarProps {
  className?: string;
  children: React.ReactText;
  size?: number;
}
