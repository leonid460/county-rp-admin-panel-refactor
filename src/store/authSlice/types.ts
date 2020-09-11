import { initialState } from './initialState';

export type IAuthSliceState = typeof initialState;

export interface ILoginAction {
  type: string;
  payload: string;
  error: Error;
}
