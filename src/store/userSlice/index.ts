import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUserProfile } from 'api';
import { IUserPerson, TAsyncCallStatus } from 'types';

interface IUserData {
  id: number;
  username: string;
  persons: IUserPerson[];
}

interface IGetUserInfoAction {
  type: string;
  payload: IUserData;
  error?: Error;
}

const initialState = {
  data: {
    id: NaN,
    username: '',
    persons: [] as IUserPerson[]
  },
  status: 'idle' as TAsyncCallStatus,
  error: null as Error | null
};

type IUserSliceState = typeof initialState;

export const getUserInfo = createAsyncThunk(
  'user/getUserInfo',
  async ({ username }: { username: string }) => {
    const profile = await getUserProfile(username);

    const userData: IUserData = {
      id: profile.player.id,
      username: profile.player.login,
      persons: profile.persons
    };

    return userData;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserInfo.pending.toString(), (state) => {
      state.status = 'loading';
    });

    builder.addCase(getUserInfo.fulfilled.toString(), (state, action: IGetUserInfoAction) => {
      state.status = 'succeeded';
      state.data = action.payload;
    });

    builder.addCase(getUserInfo.rejected.toString(), (state, action: IGetUserInfoAction) => {
      state.status = 'failed';
      state.error = action.error;
    });
  }
});

export const selectUsername = (state: { user: IUserSliceState }) => state.user.data.username;
export const selectUserPersons = (state: { user: IUserSliceState }) => state.user.data.persons;

export default userSlice.reducer;
