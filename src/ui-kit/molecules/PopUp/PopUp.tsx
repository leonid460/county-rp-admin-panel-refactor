import React, { useState } from 'react';
import * as Styled from './styled';
import { IPopUpProps } from './types';

// TODO: убрать передачу компоненты кнопки напрямую и сделать поп-ап контролируемым объектом
export const PopUp: React.FC<IPopUpProps> = ({ openerContent, children, align }) => {
  const [isOpen, open] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    const currentTarget = event.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        open(false);
      }
    }, 0);
  };

  return (
    <Styled.PopUpWrapper>
      <Styled.PopUpOpenerWrapper tabIndex={1} onFocus={() => open(true)} onBlur={handleBlur}>
        {openerContent}
        {isOpen && <Styled.PopUpContainer align={align}>{children}</Styled.PopUpContainer>}
      </Styled.PopUpOpenerWrapper>
    </Styled.PopUpWrapper>
  );
};
