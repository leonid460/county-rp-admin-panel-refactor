import { post } from 'api/requests';
import { IGroup } from 'types';

interface ICreateGroupData {
  id: string;
  name: string;
  color?: string;
  adminPanel: boolean;
}

export async function createGroup(data: ICreateGroupData): Promise<IGroup> {
  const url = 'Admin/Group';

  return post(url, { ...data });
}
