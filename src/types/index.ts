export interface IAdminLevel {
  id: string;
  name: string;
  ban: boolean;
}

export interface IFaction {
  id: string;
  name: string;
  color: string;
  ranks: string[];
  type: number;
}

export interface IGroup {
  id: string;
  name: string;
  color?: string;
}

export interface IPerson {
  id: number;
  name: string;
  playerId: number;
  adminLevelId: string;
  factionId: string;
  groupId: string;
  leader: boolean;
  rank: number;
}

export interface IUserPerson {
  person: IPerson;

  faction: IFaction;

  vehicles: {
    id: number;
    personId: number;
  }[];
}

export interface IPlayer {
  id: number;
  login: string;
  password: string;
  groupId: string;
}

export interface ISearchStore<T> {
  searchResult: T[];
  maxPage: number;
  currentPage: number;
  goToNextPage(): void;
  goToPrevPage(): void;
  search(): Promise<void>;
}

//TODO: add "interactive" color field
export interface ITheme {
  colors: {
    gradient: string;
    background: string;
    container: string;
    border: string;
    shadow?: string;

    primaryButton: IButtonThemeParams;
    secondaryButton: IButtonThemeParams;

    header: string;
    highlight: string;
    primaryText: string;
    secondaryText: string;
    contrastText: string;

    input: {
      border: string;
      text: string;
      background: string;
    };

    leftPanel: {
      background: string;
      text: string;
      rowActiveBackground: string;
      rowActiveBorder: string;
      rowHoverBackground: string;
      rowActiveHoverBackground: string;
    };

    notification: {
      info: INotificationThemeParams;
      error: INotificationThemeParams;
    };
  };

  device: {
    mobileS: string;
    mobileM: string;
    mobileL: string;
    tablet: string;
    laptop: string;
    laptopL: string;
    desktop: string;
    desktopL: string;
  };

  notificationPosition: TNotificationsPosition;
}

interface IButtonThemeParams {
  background: string;
  color: string;
  borderColor?: string;
  hoverBackground: string;
  hoverColor: string;
  hoverBorderColor?: string;
}

interface INotificationThemeParams {
  background: string;
  headerText: string;
  bodyText: string;
}

export type TNotificationType = 'info' | 'error';

export interface INotificationMessage {
  header: string;
  content: string;
  type?: TNotificationType;
}

export type TNotificationsPosition =
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'top-left'
  | 'top-right'
  | 'top-center';
