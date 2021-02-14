import { get } from 'api/requests';
import { IFaction } from 'types';

export async function getFaction(id: string): Promise<IFaction> {
  const url = `Admin/Faction/${id}`;

  return get(url);
}
