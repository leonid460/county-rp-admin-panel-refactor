import { del } from 'api/requests';

export async function deleteAdminLevel(id: string): Promise<void> {
  const url = `Admin/AdminLevel/${id}`;

  return del(url);
}
