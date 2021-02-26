import 'styled-components';
import { ITheme } from 'types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ITheme['colors'];
    typography: ITheme['typography'];
    device: ITheme['device'];
    notificationPosition: ITheme['notificationPosition'];
  }
}
