import {Group} from 'AdminPanel/types';

type SearchResult = {
  items: Group[];
  allAmount: number;
  page: number;
  maxPage: number;
};

export async function getGroupsFilterBy(
  page: number = 1,
  id: string = '',
  name: string = ''
) {
  const apiUrl = process.env.REACT_APP_API_URL;
  let url = `${apiUrl}api/Admin/Group/FilterBy?page=${page}`;
  url += id ? `&id=${id}` : '';
  url += name ? `&name=${name}` : '';

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  }

  const json: SearchResult = await response.json();

  if (!json.hasOwnProperty('items')) {
    throw new Error(`Response is invalid: ` + json);
  }

  return json;
}
