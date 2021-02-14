import { TFilterByCall, TSearchResultItem } from '../types';

export interface ISearchModalProps {
  shouldShow: boolean;
  hide: () => void;
  getFilterBy: TFilterByCall;
  setValue: (value: TSearchResultItem) => void;
}
