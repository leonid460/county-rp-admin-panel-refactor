import React, { useCallback, useEffect, useState } from 'react';
import { INotificationMessage } from 'types';
import { Notification } from './Notification';
import { eventEmitter } from 'eventEmitter';
import { Portal } from 'modules/Portal/Portal';
import { TrayContainer } from './styled';

export const notificationEvent = 'event-notification';

export const Notifications = ({ timeout }: { timeout: number }) => {
  const [messages, setMessages] = useState<INotificationMessage[]>([]);

  const closeNotification = useCallback(
    (index: number) => {
      setMessages([...messages.slice(0, index), ...messages.slice(index + 1)]);
    },
    [messages]
  );

  const onClick = (index: number) => {
    closeNotification(index);
  };

  useEffect(() => {
    const unsubscribe = eventEmitter.subscribe<INotificationMessage>(notificationEvent, (data) => {
      setMessages([...messages, data]);
    });

    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      closeNotification(0);
    }, timeout);

    return () => clearTimeout(timer);
  }, [closeNotification, messages]);

  return (
    <Portal>
      <TrayContainer>
        {messages.map((msg, index) => (
          <Notification {...msg} key={index} onClick={() => onClick(index)} />
        ))}
      </TrayContainer>
    </Portal>
  );
};
