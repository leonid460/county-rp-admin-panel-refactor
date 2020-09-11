import { createSlice } from '@reduxjs/toolkit';
import { IGetUserInfoAction } from './types';
import { initialState } from './initialState';
import { getUserInfo } from './thunks';

export const userSlice = createSlice({
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
      state.error = null;
    });

    builder.addCase(getUserInfo.rejected.toString(), (state, action: IGetUserInfoAction) => {
      state.status = 'failed';
      state.error = action.error;
    });
  }
});
