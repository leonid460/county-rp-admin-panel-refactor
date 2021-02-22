import { put } from 'api/requests';
import { IFaction } from 'types';

export async function editFaction(id: string, data: IFaction): Promise<IFaction> {
  return put(`Admin/Faction/${id}`, { ...data });
}
