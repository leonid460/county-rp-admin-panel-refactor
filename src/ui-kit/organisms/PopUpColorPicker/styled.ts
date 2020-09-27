import styled from 'styled-components';
import { Input as ProtoInput } from 'ui-kit/atoms';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: flex-start;
`;

export const ColorPaletteButton = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: none;
  background: ${({ theme }) => theme.colors.container};
`;

export const Input = styled(ProtoInput)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;
