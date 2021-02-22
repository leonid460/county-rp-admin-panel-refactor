import React, { forwardRef } from 'react';
import * as Styled from './styled';
import { IListItemProps } from './types';

const DeleteButton = ({ onClick }: { onClick: () => void }) => (
  <Styled.DeleteItemButtonContainer onClick={onClick} type="button">
    <Styled.SvgCrossIcon />
  </Styled.DeleteItemButtonContainer>
);

export const ListItem = forwardRef<HTMLDivElement, IListItemProps>(
  ({ children, handleDelete, isHighlighted }, ref) => (
    <Styled.ListIemContainer isHighlighted={isHighlighted} ref={ref}>
      <Styled.ListItemText>{children}</Styled.ListItemText>
      <DeleteButton onClick={() => handleDelete()} />
    </Styled.ListIemContainer>
  )
);

ListItem.displayName = 'ListItem';
