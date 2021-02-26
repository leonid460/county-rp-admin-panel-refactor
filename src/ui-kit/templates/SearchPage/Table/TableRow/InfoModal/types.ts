import { TTableRow, TTableColumnHead } from '../../types';

export interface IInfoModalProps {
  heads: TTableColumnHead[];
  data: TTableRow | null;
  editRoute?: string;
  hide: () => void;
}
