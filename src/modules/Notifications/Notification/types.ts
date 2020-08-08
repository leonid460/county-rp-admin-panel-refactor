import { ITheme } from 'types';
import { INotificationMessage, TNotificationType } from 'types';

export interface INotificationContainerProps {
  type?: TNotificationType;
  theme: ITheme;
}

export type INotificationProps = INotificationMessage & {
  onClick: Function;
};
