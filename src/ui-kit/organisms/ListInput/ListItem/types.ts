import { ReactText } from 'react';

export interface IListItemProps {
  children: ReactText;
  isHighlighted?: boolean;
  handleDelete: () => void;
}
