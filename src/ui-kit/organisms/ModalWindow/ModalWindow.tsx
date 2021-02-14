import React from 'react';
import * as Styled from './styled';
import { CloseButton } from 'ui-kit/atoms/CloseButton';
import { ModalWindowProps } from './types';

export const ModalWindow: React.FC<ModalWindowProps> = ({ children, shouldShow, hide }) => {
  if (!shouldShow) {
    return null;
  }

  return (
    <Styled.Overlay>
      <Styled.ModalWindowContainer>
        <Styled.ModalWindowHead>
          <CloseButton onClick={hide} />
        </Styled.ModalWindowHead>
        <Styled.ModalWindowBody>{children}</Styled.ModalWindowBody>
      </Styled.ModalWindowContainer>
    </Styled.Overlay>
  );
};
