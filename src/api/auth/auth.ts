import { get, post } from 'api/requests';

export async function auth(username: string, password: string) {
  const query = `login=${username}&password=${password}`;
  const url = 'Authorization/TryAuthorize?' + query;

  return post(url, { login: username, password });
}

export async function deAuth() {
  const url = 'Authorization/Logout';

  return get(url);
}
