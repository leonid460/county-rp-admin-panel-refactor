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

    primaryButton: IButtonThemeParams;
    secondaryButton: IButtonThemeParams;

    header: string;
    primaryText: string;
    secondaryText: string;

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
}

interface IButtonThemeParams {
  background: string;
  color: string;
  borderColor?: string;
  hoverBackground: string;
  hoverColor: string;
  hoverBorderColor?: string;
}
