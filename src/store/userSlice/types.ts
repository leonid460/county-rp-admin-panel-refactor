import { IUserPerson } from 'types';

export interface IUserData {
  id: number;
  username: string;
  persons: IUserPerson[];
}

export interface IGetUserInfoAction {
  type: string;
  payload: IUserData;
  error?: Error;
}
