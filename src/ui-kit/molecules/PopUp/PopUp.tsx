import React, { useState } from 'react';
import * as Styled from './styled';

export const PopUp: React.FC<{ openerContent: React.ReactNode }> = ({
  openerContent,
  children
}) => {
  const [isOpen, open] = useState(false);

  return (
    <Styled.PopUpWrapper>
      <Styled.PopUpOpenerWrapper onClick={() => open(!isOpen)}>
        {openerContent}
      </Styled.PopUpOpenerWrapper>
      {isOpen && <Styled.PopUpContainer>{children}</Styled.PopUpContainer>}
    </Styled.PopUpWrapper>
  );
};
