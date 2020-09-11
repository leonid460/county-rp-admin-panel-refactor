import { IUserPerson, IPerson, IFaction } from 'types';

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
    person: IPerson;

    faction: IFaction;

    vehicles: {
      id: number;
      personId: number;
    }[];
  }[];
}
