export type TNotificationType = 'info' | 'error';

export interface INotificationMessage {
  header: string;
  content: string;
  type?: TNotificationType;
}

export type TNotificationsPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-left'
  | 'top-right'
  | 'top-center';
