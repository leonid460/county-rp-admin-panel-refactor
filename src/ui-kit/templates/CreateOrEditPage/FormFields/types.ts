import { TFormFieldType } from 'utils';

export interface IFormField<T> {
  name: string;
  type: TFormFieldType;
  value: T;
  setValue: (value: T) => void;
  options?: { key: string; name: string }[];
}

export interface IFormFieldsProps {
  fields: (IFormField<string> | IFormField<boolean>)[];
}
