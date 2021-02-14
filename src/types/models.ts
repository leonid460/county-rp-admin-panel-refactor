export interface IAdminLevel {
  id: string;
  name: string;
  ban: boolean;
}

export type TFactionType = number;

export interface IFaction {
  id: string;
  name: string;
  ranks: string[];
  type: TFactionType;
}

export interface IGroup {
  id: string;
  name: string;
  color?: string;
  adminPanel: boolean;
}

export interface IPerson {
  id: number;
  name: string;
  playerId: number;
  regDate: string;
  lastDate: string;
  adminLevelId: string;
  factionId: string;
  groupId: number;
  leader: boolean;
  rank: number;
  position: number[];
}

export interface IPlayer {
  id: number;
  login: string;
  password: string;
  groupId: string;
}
