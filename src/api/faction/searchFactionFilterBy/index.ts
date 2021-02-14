import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams } from 'utils';

export async function getFactionFilterBy(page: number, data?: { [key: string]: string }) {
  const url = `Admin/Faction/FilterBy?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  return response;
}
