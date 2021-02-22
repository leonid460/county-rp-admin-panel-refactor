import styled from 'styled-components';
import { SvgCrossIcon as OriginalSvgCrossIcon } from './SvgCrossIcon';

export const ListIemContainer = styled.div<{ isHighlighted?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 15px;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 16px;
  background: ${({ isHighlighted }) => (isHighlighted ? 'blue' : 'grey')};
  animation: 0.4s slide-right ease;
  transition: background 0.2s ease-in-out;

  @keyframes slide-right {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const ListItemText = styled.div`
  font-size: 13px;
  line-height: 13px;
  margin: 0;
  padding: 0;
  margin-right: 6px;
  color: white;
`;

export const DeleteItemButtonContainer = styled.button`
  display: inline-flex;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
`;

export const SvgCrossIcon = styled(OriginalSvgCrossIcon)`
  width: 10px;
  height: 10px;

  path {
    fill: white;
  }
`;
