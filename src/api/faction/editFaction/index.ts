import { put } from 'api/requests';
import { IFaction } from 'types';

export async function editFaction(data: IFaction): Promise<IFaction> {
  return put('Admin/Faction', { ...data });
}
