import { ITheme } from 'types';
import * as colors from './colors';
import { makeTypographyItem } from './helpers';

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
    border: colors.lightGray,
    hover: colors.lighterGray,
    shadow: 'rgba(0,0,0,0.19)',

    header: colors.blue,
    highlight: colors.blue,
    primaryText: '#111111',
    secondaryText: colors.gray,
    contrastText: colors.softWhite,

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
      border: colors.lightGray,
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
    },

    table: {
      rowBackground: 'white',
      rowEvenBackground: colors.lighterGray,
      headerBackground: 'white'
    }
  },

  typography: {
    h1: makeTypographyItem({
      fontSize: '24px'
    }),
    subtitle1: makeTypographyItem({
      fontSize: '18px'
    }),
    button: makeTypographyItem({
      fontSize: '15px',
      fontWeight: 'bold'
    })
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
