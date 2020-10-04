import { ISmartFormRawInputField } from 'ui-kit/organisms';

export interface ICreateOrEditPageProps<T> {
  fields: ISmartFormRawInputField[];
  apiCall: (data: T) => Promise<T>;
  type: 'create' | 'edit';
}
