import { post } from 'api/requests';

const apiRoot = process.env.REACT_APP_API_URL;

export async function auth(username: string, password: string) {
  const url = apiRoot + 'auth/login';

  return post(url, JSON.stringify({ login: username, password }));
}

export async function deAuth() {
  return {};
}
