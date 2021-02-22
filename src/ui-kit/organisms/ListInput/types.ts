import { Dispatch, SetStateAction } from 'react';

export interface IListInputProps {
  items: string[];
  setItems: Dispatch<SetStateAction<string[]>>;
}
