import { get } from '../requests';
import { IUserProfile } from './types';

const apiRoot = process.env.REACT_APP_API_URL;

export async function getUserProfile(username: string): Promise<IUserProfile> {
  const url = apiRoot + 'api/Profile?login=' + username;

  return get(url);
}
