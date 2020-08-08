import React from 'react';
import { INotificationProps } from './types';
import { NotificationContainer } from './styled';

export const Notification = ({ header, content, onClick, type }: INotificationProps) => {
  return (
    <NotificationContainer onClick={() => onClick()} type={type}>
      <h3>{header}</h3>
      {content}
    </NotificationContainer>
  );
};
