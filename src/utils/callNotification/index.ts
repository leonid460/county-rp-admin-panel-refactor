import { eventEmitter } from 'eventEmitter';
import { notificationEvent } from 'modules/Notifications';
import { INotificationMessage } from 'types';

export function callNotification(data: INotificationMessage) {
  eventEmitter.emit<INotificationMessage>(notificationEvent, data);
}
