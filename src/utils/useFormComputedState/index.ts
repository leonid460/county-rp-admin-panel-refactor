import { useState } from 'react';

export type TFormFieldType = 'text' | 'color' | 'checkbox' | 'select';

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

export function useFormComputedState(
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
