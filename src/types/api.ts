export interface IFilterByResponse<T> {
  items: T[];
  maxPage: number;
  allAmount: number;
  page: number;
}
