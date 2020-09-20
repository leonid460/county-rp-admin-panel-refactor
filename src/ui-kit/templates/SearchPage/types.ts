import { IFilterByResponse } from 'types';

export interface ISearchPageProps {
  actions: {
    name: string;
    route: string;
  }[];

  filterFields: {
    name: string;
    propKey: string;
  }[];

  apiCall: (
    page: number,
    data: { [key: string]: string }
  ) => Promise<IFilterByResponse<{ [key: string]: string | number }>>;

  tableColumnNames: string[];
  editRoute?: string;
}
