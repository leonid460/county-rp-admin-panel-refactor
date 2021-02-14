import { get } from 'api/requests';
import { IGroup } from 'types';

export async function getGroup(id: string): Promise<IGroup> {
  const url = `Admin/Group/${id}`;

  return get(url);
}
