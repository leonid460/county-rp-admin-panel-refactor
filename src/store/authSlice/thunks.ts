import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, deAuth } from 'api';

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
