import { get, post } from '../requests';

const apiRoot = process.env.REACT_APP_API_URL;

export async function auth(username: string, password: string) {
  const query = `login=${username}&password=${password}`;
  const url = apiRoot + 'api/Authorization/TryAuthorize?' + query;

  return post(url, JSON.stringify({ login: username, password }));
}

export async function logout() {
  const url = apiRoot + 'api/Authorization/Logout';

  return get(url);
}
