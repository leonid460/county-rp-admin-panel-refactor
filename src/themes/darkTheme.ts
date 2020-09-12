import { ITheme } from 'types';
import * as colors from './colors';
import { defaultTheme } from './defaultTheme';

export const darkTheme: ITheme = {
  ...defaultTheme,

  colors: {
    gradient: colors.gradients.deepSpace,
    container: colors.darkerGray,
    hover: colors.darkGray,
    border: colors.darkViolet,
    background: colors.softBlack,

    primaryButton: {
      background: colors.lightViolet,
      color: colors.softBlack,
      hoverBackground: colors.darkViolet,
      hoverColor: colors.softBlack
    },

    secondaryButton: {
      color: colors.gray,
      background: 'black',
      borderColor: colors.gray,
      hoverBackground: 'black',
      hoverColor: colors.lightViolet,
      hoverBorderColor: colors.lightViolet
    },

    input: {
      border: colors.lightViolet,
      text: colors.lightViolet,
      background: colors.softBlack
    },

    header: colors.lightViolet,
    highlight: colors.lightViolet,
    primaryText: colors.softWhite,
    secondaryText: '#7f7f7f',
    contrastText: colors.softBlack,

    leftPanel: {
      background: colors.gradients.deepSpace,
      text: colors.softWhite,
      rowActiveBorder: colors.lightViolet,
      rowActiveBackground: colors.softBlack,
      rowHoverBackground: colors.darkerGray,
      rowActiveHoverBackground: colors.darkerGray
    },

    notification: {
      info: {
        background: colors.darkGray,
        headerText: 'white',
        bodyText: 'white'
      },
      error: {
        background: colors.owlPink,
        headerText: 'white',
        bodyText: 'white'
      }
    }
  },

  notificationPosition: 'bottom-left'
};
