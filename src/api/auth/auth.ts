import { get, post } from 'api/requests';

export async function auth(username: string, password: string): Promise<string> {
  const query = `?login=${username}&password=${password}`;
  const url = 'Authorization/TryAuthorize' + query;
  const response = await post(url, { login: username, password });

  return response['access_token'];
}

export async function deAuth() {
  const url = 'Authorization/Logout';

  return get(url);
}
