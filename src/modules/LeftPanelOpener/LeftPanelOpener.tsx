import React from 'react';
import { OpenerContainer } from './styled';
import { useStore } from 'stores';

interface ILeftPanelOpenerProps {
  className?: string;
}

export const LeftPanelOpener = ({ className }: ILeftPanelOpenerProps) => {
  const { leftPanelStore } = useStore();

  return (
    <OpenerContainer className={className}>
      <span className="material-icons">{leftPanelStore.isOpen ? 'close' : 'menu'}</span>
      <input
        type="checkbox"
        checked={leftPanelStore.isOpen}
        onChange={() => leftPanelStore.toggle()}
      />
    </OpenerContainer>
  );
};
