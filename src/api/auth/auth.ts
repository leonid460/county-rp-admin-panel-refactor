import { get, post } from 'api/requests';

const apiRoot = process.env.REACT_APP_API_URL;

export async function auth(username: string, password: string) {
  const query = `login=${username}&password=${password}`;
  const url = apiRoot + 'Authorization/TryAuthorize?' + query;

  return post(url, { login: username, password });
}

export async function deAuth() {
  const url = apiRoot + 'Authorization/Logout';

  return get(url);
}
