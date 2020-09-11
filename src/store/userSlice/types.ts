import { IUserPerson } from 'types';
import { initialState } from './initialState';

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

export type IUserSliceState = typeof initialState;
