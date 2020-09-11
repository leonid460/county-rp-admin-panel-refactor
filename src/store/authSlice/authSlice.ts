import { createSlice } from '@reduxjs/toolkit';
import { ILoginAction } from './types';
import { login, logout } from './thunks';
import { initialState } from './initialState';

export const authSlice = createSlice({
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
