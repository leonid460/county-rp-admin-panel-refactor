import { TFormFieldType } from 'ui-kit/organisms/SmartForm/types';
// import { TVariousObject } from 'types';

export interface ICreateOrEditPageProps<T> {
  fields: {
    name: string;
    key: string;
    type: TFormFieldType;
    options?: { name: string; key: string }[];
  }[];
  apiCall: (data: T) => Promise<T>;
  type: 'create' | 'edit';
}

// (data: TVariousObject) => Promise<TVariousObject>;
