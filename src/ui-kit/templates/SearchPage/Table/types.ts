export type TTableColumnHead = { key: string; name: string };

export type TTableRow = { [p: string]: string | number };

export interface ITableProps {
  columnsHeads: TTableColumnHead[];
  rows: TTableRow[];
  editRoute?: string;
}
