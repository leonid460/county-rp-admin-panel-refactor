import { post } from 'api/requests';
import { IFaction } from 'types';

export async function createFaction(data: IFaction): Promise<IFaction> {
  const url = 'Admin/Faction';

  return post(url, { ...data });
}
