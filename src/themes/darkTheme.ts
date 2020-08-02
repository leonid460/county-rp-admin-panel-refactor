import { ITheme } from 'types';
import * as colors from './colors';
import { defaultTheme } from './defaultTheme';

export const darkTheme: ITheme = {
  ...defaultTheme,

  colors: {
    gradient: colors.gradients.deepSpace,
    container: colors.darkGray,
    border: colors.lightViolet,
    background: colors.gray,

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
    primaryText: colors.softWhite,
    secondaryText: '#7f7f7f'
  }
};
