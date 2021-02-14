import { IFilterByResponse } from 'types';

export interface ISearchProps {
  getFilterBy: TFilterByCall;
  currentItem: TSearchResultItem | null;
  setCurrentItem: (value: TSearchResultItem | null) => void;
  placeholder?: string;
  id?: string;
}

export type TFilterByCall = (
  page: number,
  query: string
) => Promise<IFilterByResponse<TSearchResultItem>>;

export type TSearchResultItem = { name: string; value: string };
