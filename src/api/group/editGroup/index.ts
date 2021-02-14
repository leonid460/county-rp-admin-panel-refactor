import { put } from 'api/requests';
import { IGroup } from 'types';

interface IEditGroupData {
  id: string;
  name: string;
  color?: string;
  adminPanel: boolean;
}

export async function editGroup(data: IEditGroupData): Promise<IGroup> {
  return put('Admin/Group', { ...data });
}
