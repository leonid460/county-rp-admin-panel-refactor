import { post } from 'api/requests';
import { IPlayer } from 'types';

interface ICreatePlayerData {
  login: string;
  password: string;
  groupId: string;
}

export async function createPlayer(data: ICreatePlayerData): Promise<IPlayer> {
  const url = 'Admin/Player';

  return post(url, { ...data });
}
