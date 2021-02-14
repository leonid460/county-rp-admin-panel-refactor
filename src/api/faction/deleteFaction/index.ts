import { del } from 'api/requests';

export async function deleteFaction(id: string): Promise<void> {
  const url = `Admin/Faction/${id}`;

  return del(url);
}
