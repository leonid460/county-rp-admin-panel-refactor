import styled from 'styled-components';
import { TextRow } from '../styled';

export const MiniProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MiniProfileMenuItem = styled(TextRow)`
  padding: 10px 15px;
  text-align: center;

  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #eaeaea;
  }

  transition: background-color 0.1s ease;
`;
