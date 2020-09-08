import React from 'react';
import { OpenerContainer } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsOpen, toggle } from 'store/leftPanelSlice';

interface ILeftPanelOpenerProps {
  className?: string;
}

export const LeftPanelOpener = ({ className }: ILeftPanelOpenerProps) => {
  const dispatch = useDispatch();
  const toggleLeftPanel = () => dispatch(toggle());
  const isOpen = useSelector(selectIsOpen);

  return (
    <OpenerContainer className={className}>
      <span className="material-icons">{isOpen ? 'close' : 'menu'}</span>
      <input type="checkbox" checked={isOpen} onChange={() => toggleLeftPanel()} />
    </OpenerContainer>
  );
};
