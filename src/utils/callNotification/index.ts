import { eventEmitter } from 'eventEmitter';
import { notificationEvent } from 'modules/common/Notifications';
import { INotificationMessage } from 'types';

export function callNotification(data: INotificationMessage) {
  eventEmitter.emit<INotificationMessage>(notificationEvent, data);
}
