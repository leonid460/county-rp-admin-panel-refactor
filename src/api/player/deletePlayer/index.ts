import { del } from 'api/requests';

export async function deletePlayer(id: string): Promise<void> {
  const url = `Admin/Player/${id}`;

  return del(url);
}
