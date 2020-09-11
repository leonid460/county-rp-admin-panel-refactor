import React from 'react';
import { INotificationProps } from './types';
import { NotificationContainer } from './styled';

export const Notification = ({ header, content, onClick, type }: INotificationProps) => {
  return (
    <NotificationContainer onClick={() => onClick()} type={type}>
      <h1>{header}</h1>
      <span>{content}</span>
    </NotificationContainer>
  );
};
