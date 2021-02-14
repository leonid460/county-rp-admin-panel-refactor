import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams } from 'utils';

export async function getGroupsFilterBy(page: number, data?: { [key: string]: string }) {
  const url = `Admin/Group/FilterBy?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  return response;
}
