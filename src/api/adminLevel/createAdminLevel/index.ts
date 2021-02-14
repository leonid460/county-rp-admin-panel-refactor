import { post } from 'api/requests';
import { IAdminLevel } from 'types';

export async function createAdminLevel(data: IAdminLevel): Promise<IAdminLevel> {
  const url = 'Admin/AdminLevel';

  return post(url, { ...data });
}
