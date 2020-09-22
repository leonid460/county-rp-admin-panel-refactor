import { TFormFieldType } from 'utils';

export interface ICreateOrEditPageProps {
  fields: {
    name: string;
    key: string;
    type: TFormFieldType;
  }[];
}
