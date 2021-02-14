import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalWindowContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 16px * 2);
  border-radius: 5px;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.container};

  @media ${({ theme }) => theme.device.tablet} {
    top: 32px;
    left: 48px;
    right: 48px;
    max-height: calc(100vh - 32px * 2);
  }

  @media ${({ theme }) => theme.device.laptop} {
    top: 120px;
    left: calc(100vw / 4);
    right: calc(100vw / 4);
    max-height: calc(100vh - 120px * 2);
  }
`;

export const ModalWindowHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ModalWindowBody = styled.div`
  width: 100%;
  flex-grow: 1;
  overflow-x: auto;
`;
