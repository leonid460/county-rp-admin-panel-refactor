import { IUserSliceState } from './types';

export const selectUsername = (state: { user: IUserSliceState }) => state.user.data.username;
export const selectUserPersons = (state: { user: IUserSliceState }) => state.user.data.persons;
