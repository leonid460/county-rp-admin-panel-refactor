import { IFilterByResponse } from 'types';
import { ISmartFormRawInputField } from 'ui-kit/organisms';
import { TTableColumnHead } from './Table/types';

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

  tableColumnsHeads: TTableColumnHead[];
  editRoute?: string;
}
