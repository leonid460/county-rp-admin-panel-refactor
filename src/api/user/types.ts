import { IUserPerson } from 'types';

export interface IUserProfile {
  player: {
    id: number;
    login: string;
  };

  persons: IUserPerson[];
}
