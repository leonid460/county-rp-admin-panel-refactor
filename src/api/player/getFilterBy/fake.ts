import { get } from 'api/requests';
import { IPlayer } from 'types';

const apiRoot = process.env.REACT_APP_API_URL;

function dataToString(data: { [key: string]: string }) {
  const params = [];

  for (const key in data) {
    params.push(`${key}=${data[key]}`);
  }

  return params.join('&');
}

export async function getPlayerFilterBy(page: number, data?: { [key: string]: string }) {
  let url = apiRoot + `Player?page=${page}`;
  url += data ? dataToString(data) : '';

  const response: IPlayer[] = await get(url);

  return response.map((player) => ({
    id: String(player.id),
    login: player.login,
    groupId: player.groupId
  }));
}
