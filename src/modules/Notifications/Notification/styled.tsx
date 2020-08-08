import styled from 'styled-components';
import { INotificationContainerProps } from './types';

function defineColorFactory(key: 'bodyText' | 'background' | 'headerText') {
  return ({ type, theme }: INotificationContainerProps) =>
    type === 'error' ? theme.colors.notification.error[key] : theme.colors.notification.info[key];
}

const defineTextColor = defineColorFactory('bodyText');
const defineBackgroundColor = defineColorFactory('background');
const defineHeaderTextColor = defineColorFactory('headerText');

export const NotificationContainer = styled.div<INotificationContainerProps>`
  min-width: 300px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  user-select: none;
  cursor: pointer;
  animation: slide-up 0.4s ease;

  ${({ theme, type }) => `
    color: ${defineTextColor({ theme, type })};
    background: ${defineBackgroundColor({ type, theme })};
  `};

  & > h3 {
    margin-bottom: 6px;

    ${({ theme, type }) => `
      color: ${defineHeaderTextColor({ theme, type })};
    `};
  }

  @keyframes move {
    0% {
      transform: translateY(50%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;
