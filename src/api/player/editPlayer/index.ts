import { put } from 'api/requests';
import { IPlayer } from 'types';

export async function editPlayer(id: number, data: IPlayer): Promise<IPlayer> {
  return put(`Admin/Player/${id}`, { ...data });
}
