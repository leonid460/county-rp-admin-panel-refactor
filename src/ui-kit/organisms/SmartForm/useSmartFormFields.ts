import { useState } from 'react';
import { ISmartFormFieldWithType, TSmartFormFieldType, ISmartFormRawInputField } from './types';

export function useSmartFormFields(
  fields: ISmartFormRawInputField[]
): [ISmartFormFieldWithType<string | boolean>[], { [p: string]: string | boolean }] {
  const [formState, setFormState] = useFormComputedState(fields);

  const formFields = fields.map((field) => ({
    name: field.name,
    key: field.key,
    type: field.type,
    options: field.options,
    value: field.initialValue || formState[field.key],
    setValue: (value: string | boolean) => setFormState(field.key, value)
  }));

  return [formFields, formState];
}

function useFormComputedState(
  fields: {
    type: TSmartFormFieldType;
    key: string;
  }[]
): [{ [p: string]: string | boolean }, (key: string, value: string | boolean) => void] {
  const [state, setState] = useState(makeInitialFilterState(fields));

  const modifiedSetState = (key: string, value: string | boolean) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value
    }));
  };

  return [state, modifiedSetState];
}

function makeInitialFilterState(
  fields: {
    type: TSmartFormFieldType;
    key: string;
  }[]
) {
  const state: { [key: string]: string | boolean } = {};
  fields.forEach(({ key, type }) => {
    state[key] = type === 'checkbox' ? false : '';
  });

  return state;
}
