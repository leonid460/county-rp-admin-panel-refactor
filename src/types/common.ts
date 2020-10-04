import { IPerson, IFaction } from './models';

export interface IUserPerson {
  personInfo: IPerson;

  faction: IFaction;

  vehicles: {
    id: number;
    personId: number;
  }[];
}

export type TAsyncCallStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export type TVariousObject = { [key: string]: string | boolean };
