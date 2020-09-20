import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams } from 'utils';

const apiRoot = process.env.REACT_APP_API_URL;

export async function getPlayerFilterBy(page: number, data?: { [key: string]: string }) {
  const url = apiRoot + `Admin/Player/FilterBy?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  return response;
}
