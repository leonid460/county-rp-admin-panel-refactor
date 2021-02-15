import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, deAuth, getMiniInfo } from 'api';
import { of } from '../../utils';

export const login = createAsyncThunk(
  'auth/login',
  async ({ username, password }: { username: string; password: string }) => {
    const token = await auth(username, password);

    localStorage.setItem('county-rp-admin-token', token);

    return username;
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  const { error } = await of(deAuth());
  localStorage.removeItem('county-rp-admin-token');

  if (error) {
    throw error;
  }
});

export const resumeSession = createAsyncThunk('auth/resumeSession', async () => {
  return getMiniInfo();
});
