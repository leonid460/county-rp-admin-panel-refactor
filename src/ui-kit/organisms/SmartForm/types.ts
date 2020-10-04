export type TSmartFormFieldType = 'text' | 'color' | 'checkbox' | 'select';

export interface ISmartFormStateField<T> {
  name: string;
  type: TSmartFormFieldType;
  value: T;
  setValue: (value: T) => void;
  options?: { key: string; name: string }[];
}

export interface ISmartFormProps {
  fields: (ISmartFormStateField<string> | ISmartFormStateField<boolean>)[];
}

export type ISmartFormRawInputField = {
  name: string;
  key: string;
  type: TSmartFormFieldType;
  options?: { name: string; key: string }[];
};
