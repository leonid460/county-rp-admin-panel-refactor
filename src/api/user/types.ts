import { IUserPerson } from 'types';

export interface IUserProfile {
  player: {
    id: number;
    login: string;
  };

  persons: IUserPerson[];
}

export interface IUserProfileFromApi {
  player: {
    id: number;
    login: string;
  };

  persons: {
    person: {
      id: number;
      name: string;
      playerId: number;
      factionId: string;
    };

    faction: {
      id: string;
      name: string;
      ranks: string[];
    };

    vehicles: {
      id: number;
      personId: number;
    }[];
  }[];
}
