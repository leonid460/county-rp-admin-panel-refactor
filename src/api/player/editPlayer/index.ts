import { put } from 'api/requests';
import { IPlayer } from 'types';

interface IEditPlayerData {
  login: string;
  password: string;
  groupId: string;
}

const apiRoot = process.env.REACT_APP_API_URL;

export async function editPlayer(data: IEditPlayerData): Promise<IPlayer> {
  return put(`${apiRoot}Admin/Player`, { ...data });
}
