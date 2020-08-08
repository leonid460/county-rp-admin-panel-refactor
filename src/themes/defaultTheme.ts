import { ITheme } from 'types';
import * as colors from './colors';

const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const defaultTheme: ITheme = {
  colors: {
    gradient: colors.gradients.blue,
    background: '#E8E9EF',
    container: 'white',
    border: colors.gray,
    shadow: 'rgba(0,0,0,0.19)',

    header: colors.blue,
    primaryText: '#111111',
    secondaryText: '#111111',

    primaryButton: {
      background: colors.blue,
      color: 'white',
      hoverBackground: colors.gradients.blue,
      hoverColor: 'white'
    },

    secondaryButton: {
      color: colors.gray,
      background: 'white',
      borderColor: colors.gray,
      hoverBackground: 'white',
      hoverColor: colors.blue,
      hoverBorderColor: colors.blue
    },

    input: {
      border: colors.gray,
      text: '#111111',
      background: 'white'
    },

    leftPanel: {
      background: colors.gradients.blue,
      text: 'white',
      rowActiveBorder: 'white',
      rowActiveBackground: 'rgb(73, 92, 172)',
      rowHoverBackground: '#2A3799',
      rowActiveHoverBackground: '#41539e'
    },

    notification: {
      info: {
        background: colors.gradients.blue,
        headerText: 'white',
        bodyText: 'white'
      },
      error: {
        background: colors.gradients.red,
        headerText: 'white',
        bodyText: 'white'
      }
    }
  },

  device: {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktop})`
  },

  notificationPosition: 'bottom-center'
};
