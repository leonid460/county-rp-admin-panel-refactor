import styled from 'styled-components';
import { TNotificationsPosition, ITheme } from 'types';

function defineNotificationsPosition(position: TNotificationsPosition) {
  switch (position) {
    case 'bottom-center':
      return `
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      `;
    case 'bottom-left':
      return `
        bottom: 0;
        left: 0;
      `;
    case 'bottom-right':
      return `
        bottom: 0;
        right: 0;
      `;
    case 'top-left':
      return `
        top: 80px;
        left: 0;
      `;
    case 'top-right':
      return `
        top: 80px;
        right: 0;
      `;
  }
}

export const TrayContainer = styled.div<{ theme: ITheme }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  ${({ theme }) => defineNotificationsPosition(theme.notificationPosition)}
`;
