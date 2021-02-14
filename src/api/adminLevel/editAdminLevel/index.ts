import { put } from 'api/requests';
import { IAdminLevel } from 'types';

export async function editAdminLevel(data: IAdminLevel): Promise<IAdminLevel> {
  return put('Admin/AdminLevel', { ...data });
}
