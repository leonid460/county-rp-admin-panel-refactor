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
    background: colors.gray,
    container: 'white',
    border: colors.gray,

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

    header: colors.blue,
    primaryText: '#111111',
    secondaryText: '#111111'
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
  }
};
