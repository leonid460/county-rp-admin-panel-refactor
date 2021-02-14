export interface IPageSwitchProps {
  maxPage: number;
  currentPage: number;
  setCurrentPage: (value: number) => void;
}
