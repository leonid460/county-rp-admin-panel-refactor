import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile } from 'api/user';
import { IUserData } from './types';

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
