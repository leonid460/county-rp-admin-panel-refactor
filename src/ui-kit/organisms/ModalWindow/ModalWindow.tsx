import React, { useRef, useEffect, useState } from 'react';
import * as Styled from './styled';
import { CloseButton } from 'ui-kit/atoms/CloseButton';
import { ModalWindowProps } from './types';

function useGlobalScrollBlock() {
  const [initOverflowY, setInitOverflowY] = useState('initial');

  const blockGlobalScroll = () => {
    const body = document.getElementsByTagName('body')[0];

    if (body) {
      body.style.overflowY = 'hidden';
    }
  };

  const unblockGlobalScroll = () => {
    const body = document.getElementsByTagName('body')[0];

    if (body) {
      body.style.overflowY = initOverflowY;
    }
  };

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0];

    if (body) {
      setInitOverflowY(body.style.overflowX);
    }
  }, []);

  return {
    blockGlobalScroll,
    unblockGlobalScroll
  };
}

export const ModalWindow: React.FC<ModalWindowProps> = ({ children, shouldShow, hide, title }) => {
  const ref = useRef<HTMLDivElement>();
  const { blockGlobalScroll, unblockGlobalScroll } = useGlobalScrollBlock();

  const handleEscapeKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const key = event.key;

    if (key === 'Escape') {
      hide();
    }
  };

  useEffect(() => {
    if (shouldShow) {
      ref.current?.focus();
      blockGlobalScroll();
    }

    return () => {
      unblockGlobalScroll();
    };
  }, [shouldShow]);

  if (!shouldShow) {
    return null;
  }

  return (
    <Styled.Overlay>
      <Styled.ModalWindowContainer ref={ref} tabIndex={0} onKeyDown={handleEscapeKeyPress}>
        <Styled.ModalWindowHead>
          <Styled.ModalWindowTitle>{title}</Styled.ModalWindowTitle>
          <CloseButton
            onClick={() => {
              hide();
              unblockGlobalScroll();
            }}
          />
        </Styled.ModalWindowHead>
        <Styled.ModalWindowBody>{children}</Styled.ModalWindowBody>
      </Styled.ModalWindowContainer>
    </Styled.Overlay>
  );
};
