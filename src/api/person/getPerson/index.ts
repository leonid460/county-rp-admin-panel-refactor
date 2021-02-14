import { get } from 'api/requests';
import { IPerson } from 'types';

export async function getPerson(id: number): Promise<IPerson> {
  const url = `Admin/Person/${id}`;

  return get(url);
}
