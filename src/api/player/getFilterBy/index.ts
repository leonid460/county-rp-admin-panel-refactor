import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams } from 'utils';

export async function getPlayerFilterBy(page: number, data?: { [key: string]: string }) {
  const url = `Admin/Player/FilterBy?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  return response;
}
