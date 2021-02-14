import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams, dateInFilterByItemAdaptorFactory } from 'utils';

export async function getLogFilterBy(page: number, data?: { name: string }) {
  const url = `Admin/Log/?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  const adaptLogItem = dateInFilterByItemAdaptorFactory('dateTime');

  response.items = response.items.map(adaptLogItem);

  return response;
}
