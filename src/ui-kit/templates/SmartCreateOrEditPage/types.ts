import { ISmartFormRawInputField } from 'ui-kit/organisms';

export interface ICreateOrEditPageProps<T> {
  fields: ISmartFormRawInputField[];
  createWriteUpdateMethod: (data: T) => Promise<T>;
  readMethod?: (id: string) => Promise<T>;
  deleteMethod?: (data: T) => Promise<T>;
  type: 'create' | 'edit';
  goBackRoute: string;
}
