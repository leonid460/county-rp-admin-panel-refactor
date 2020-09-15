export type TTableRow = Array<string | number>;

export interface ITableProps {
  columnNames: string[];
  rows: TTableRow[];
  editRoute?: string;
}
