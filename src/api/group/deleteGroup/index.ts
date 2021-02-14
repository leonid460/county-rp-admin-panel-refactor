import { del } from 'api/requests';

export async function deleteGroup(id: string): Promise<void> {
  const url = `Admin/Group/${id}`;

  return del(url);
}
