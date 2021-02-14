import { get } from 'api/requests';
import { IFilterByResponse } from 'types';
import { convertObjectToUrlParams, dateInFilterByItemAdaptorFactory } from 'utils';

export async function getPersonFilterBy(page: number, data?: { name: string }) {
  const url = `Admin/Person/FilterBy?page=${page}` + convertObjectToUrlParams(data);
  const response: IFilterByResponse<{ [key: string]: string }> = await get(url);

  const adaptRegDate = dateInFilterByItemAdaptorFactory('regDate');
  const adaptLastDate = dateInFilterByItemAdaptorFactory('lastDate');

  response.items = response.items.map(adaptRegDate);
  response.items = response.items.map(adaptLastDate);

  return response;
}
