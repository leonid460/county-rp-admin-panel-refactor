import { createSlice } from '@reduxjs/toolkit';
import { ILoginAction } from './types';
import { login, logout, resumeSession } from './thunks';
import { initialState } from './initialState';

function reducePendingCall(state: typeof initialState) {
  state.status = 'loading';
}

function reduceFulfilledLoginCall(state: typeof initialState, action: ILoginAction) {
  state.status = 'succeeded';
  state.data.username = action.payload;
  state.data.isAuthorized = true;
  state.error = null;
}

function reduceRejectedCall(state: typeof initialState, action: ILoginAction) {
  state.status = 'failed';
  state.error = action.error;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending.toString(), reducePendingCall);
    builder.addCase(login.fulfilled.toString(), reduceFulfilledLoginCall);
    builder.addCase(login.rejected.toString(), reduceRejectedCall);

    builder.addCase(logout.pending.toString(), reducePendingCall);
    builder.addCase(logout.fulfilled.toString(), (state) => {
      state.status = 'succeeded';
      state.data.username = '';
      state.data.isAuthorized = false;
      state.error = null;
    });
    builder.addCase(logout.rejected.toString(), (state, action: ILoginAction) => {
      state.status = 'failed';
      state.data.username = '';
      state.data.isAuthorized = false;
      state.error = action.error;
    });

    builder.addCase(resumeSession.pending.toString(), reducePendingCall);
    builder.addCase(resumeSession.fulfilled.toString(), reduceFulfilledLoginCall);
    builder.addCase(resumeSession.rejected.toString(), (state: typeof initialState) => {
      state.status = 'failed';
    });
  }
});
