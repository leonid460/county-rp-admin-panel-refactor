import { useState } from 'react';
import { IFormField, TFormFieldType } from './types';

type TSmartFormField = {
  name: string;
  key: string;
  type: TFormFieldType;
  options?: { name: string; key: string }[];
};

function makeInitialFilterState(
  fields: {
    type: TFormFieldType;
    key: string;
  }[]
) {
  const state: { [key: string]: string | boolean } = {};
  fields.forEach(({ key, type }) => {
    state[key] = type === 'checkbox' ? false : '';
  });

  return state;
}

function useFormComputedState(
  fields: {
    type: TFormFieldType;
    key: string;
  }[]
): [{ [p: string]: string | boolean }, (key: string, value: string | boolean) => void] {
  const [state, setState] = useState(makeInitialFilterState(fields));

  const modifiedSetState = (key: string, value: string | boolean) => {
    setState({
      ...state,
      [key]: value
    });
  };

  return [state, modifiedSetState];
}

export function useSmartFormFields(
  fields: TSmartFormField[]
): [IFormField<string | boolean>[], { [p: string]: string | boolean }] {
  const [formState, setFormState] = useFormComputedState(fields);

  const formFields = fields.map((field) => ({
    name: field.name,
    type: field.type,
    options: field.options,
    value: formState[field.key],
    setValue: (value: string | boolean) => setFormState(field.key, value)
  }));

  return [formFields, formState];
}
