import { put } from 'api/requests';
import { IPerson } from 'types';

export async function editPerson(data: IPerson): Promise<IPerson> {
  return put('Admin/Person', { ...data });
}
