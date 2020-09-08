import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ILoginAction } from './types';
import { auth, deAuth } from 'api';
import { TAsyncCallStatus } from 'types';

const initialState = {
  data: {
    username: '',
    isAuthorized: false
  },
  status: 'idle' as TAsyncCallStatus,
  error: null as Error | null
};

type IAuthSliceState = typeof initialState;

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    await auth(username, password);
    return username;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await deAuth();
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending.toString(), (state) => {
      state.status = 'loading';
    });

    builder.addCase(login.fulfilled.toString(), (state, action: ILoginAction) => {
      state.status = 'succeeded';
      state.data.username = action.payload;
      state.data.isAuthorized = true;
      state.error = null;
    });

    builder.addCase(login.rejected.toString(), (state, action: ILoginAction) => {
      state.status = 'failed';
      state.error = action.error;
    });

    builder.addCase(logout.pending.toString(), (state) => {
      state.status = 'loading';
    });

    builder.addCase(logout.fulfilled.toString(), (state) => {
      state.status = 'succeeded';
      state.data.username = '';
      state.data.isAuthorized = false;
      state.error = null;
    });

    builder.addCase(logout.rejected.toString(), (state, action: ILoginAction) => {
      state.status = 'failed';
      state.error = action.error;
    });
  }
});

export const selectUsername = (state: { auth: IAuthSliceState }) => state.auth.data.username;
export const selectIsAuthorized = (state: { auth: IAuthSliceState }) =>
  state.auth.data.isAuthorized;
export const selectIsLoading = (state: { auth: IAuthSliceState }) =>
  state.auth.status === 'loading';
export const selectError = (state: { auth: IAuthSliceState }) => state.auth.error;

export default authSlice.reducer;
