import styled from 'styled-components';
import { TextRow } from '../styled';
import { ITheme } from 'types';

export const MiniProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiniProfileMenuItem = styled(TextRow)<{ theme: ITheme }>`
  ${({ theme }) => `
    padding: 10px 15px;
    text-align: center;
  
    border-bottom: 1px solid ${theme.colors.border};
  
    &:last-child {
      border-bottom: none;
    }
  
    &:hover {
      background: ${theme.colors.hover};
    }
  
    transition: background-color 0.1s ease;
  `}
`;
