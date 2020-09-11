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
  min-width: 270px;
  padding: 12px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  border-radius: 8px;
  text-align: left;
  user-select: none;
  cursor: pointer;
  animation: slide-up 0.4s ease;

  &:last-child {
    margin-bottom: 10px;
  }

  ${({ theme, type }) => `
    color: ${defineTextColor({ theme, type })};
    background: ${defineBackgroundColor({ type, theme })};
  `};

  & > h1 {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 17px;

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
