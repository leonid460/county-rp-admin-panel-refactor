import React from 'react';

export type TSmartFormFieldType = 'text' | 'number' | 'color' | 'checkbox' | 'select';

interface ISmartFormField<T> {
  name: string;
  key: string;
  value: T;
  setValue: (value: T) => void;
  options?: { key: string; name: string }[];
}

export type ISmartFormFieldFactory<T> = (props: { field: ISmartFormField<T> }) => React.ReactNode;

export interface ISmartFormFieldWithType<T> extends ISmartFormField<T> {
  type: TSmartFormFieldType;
}

export interface ISmartFormProps {
  fields: (ISmartFormFieldWithType<string> | ISmartFormFieldWithType<boolean>)[];
}

export type ISmartFormRawInputField = {
  name: string;
  initialValue?: string;
  key: string;
  type: TSmartFormFieldType;
  options?: { name: string; key: string }[];
};
