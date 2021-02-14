import { put } from 'api/requests';
import { IPlayer } from 'types';

interface IEditPlayerData {
  login: string;
  password: string;
  groupId: string;
}

export async function editPlayer(data: IEditPlayerData): Promise<IPlayer> {
  return put(`Admin/Player`, { ...data });
}
