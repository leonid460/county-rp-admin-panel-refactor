export type TAsyncCallStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface ILoginAction {
  type: string;
  payload: string;
  error: Error;
}

// export interface ILoginFailedAction {
//   type: 'auth/login/failed';
//   error: Error;
// }
//
// export interface ILogoutFailedAction {
//   type: 'auth/logout/failed';
//   payload: Error;
// }
