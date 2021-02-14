import { get } from 'api/requests';
import { IPlayer } from 'types';

export async function getPlayer(id: string): Promise<IPlayer> {
  const url = `Admin/Player/${id}`;

  return get(url);
}
