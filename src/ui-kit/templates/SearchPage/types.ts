import { IFilterByResponse } from 'types';
import { ISmartFormRawInputField } from 'ui-kit/organisms';

export interface ISearchPageProps {
  actions: {
    name: string;
    route: string;
  }[];

  filterFields: ISmartFormRawInputField[];

  apiCall: (
    page: number,
    data: { [key: string]: string | boolean }
  ) => Promise<IFilterByResponse<{ [key: string]: string | number }>>;

  tableColumnNames: string[];
  editRoute?: string;
}
