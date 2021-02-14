import { get } from '../requests';
import { IUserProfile } from './types';

export async function getUserProfile(username: string): Promise<IUserProfile> {
  const url = 'Profile?login=' + username;

  return get(url);
}
