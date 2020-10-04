export type TFormFieldType = 'text' | 'color' | 'checkbox' | 'select';

export interface IFormField<T> {
  name: string;
  type: TFormFieldType;
  value: T;
  setValue: (value: T) => void;
  options?: { key: string; name: string }[];
}

export interface ISmartFormProps {
  fields: (IFormField<string> | IFormField<boolean>)[];
}
