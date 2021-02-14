import { get } from 'api/requests';
import { IAdminLevel } from 'types';

export async function getAdminLevel(id: string): Promise<IAdminLevel> {
  const url = `Admin/AdminLevel/${id}`;

  return get(url);
}
