import { post } from 'api/requests';
import { IPlayer } from 'types';

interface ICreatePlayerData {
  login: string;
  password: string;
  groupId: string;
}

const apiRoot = process.env.REACT_APP_API_URL;
// TODO убрать apiRoot в низкоуровневые функции

export async function createPlayer(data: ICreatePlayerData): Promise<IPlayer> {
  const url = apiRoot + 'Admin/Player';

  return post(url, { ...data });
}
