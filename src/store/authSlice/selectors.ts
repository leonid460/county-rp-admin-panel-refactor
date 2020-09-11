import { IAuthSliceState } from './types';

export const selectUsername = (state: { auth: IAuthSliceState }) => state.auth.data.username;
export const selectIsAuthorized = (state: { auth: IAuthSliceState }) =>
  state.auth.data.isAuthorized;
export const selectIsLoading = (state: { auth: IAuthSliceState }) =>
  state.auth.status === 'loading';
export const selectError = (state: { auth: IAuthSliceState }) => state.auth.error;
