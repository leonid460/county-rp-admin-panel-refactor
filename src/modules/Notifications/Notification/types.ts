import { ITheme } from 'types';
import { INotificationMessage } from 'types';

export type TNotificationType = 'info' | 'error';

export interface INotificationContainerProps {
  type?: TNotificationType;
  theme: ITheme;
}

export type INotificationProps = INotificationMessage & {
  onClick: Function;
};
