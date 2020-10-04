import { useState } from 'react';
import { ISmartFormStateField, TSmartFormFieldType, ISmartFormRawInputField } from './types';

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

function useFormComputedState(
  fields: {
    type: TSmartFormFieldType;
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
  fields: ISmartFormRawInputField[]
): [ISmartFormStateField<string | boolean>[], { [p: string]: string | boolean }] {
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
