import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ITheme } from 'types';

export const TileContainer = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  flex: 1 1 415px;

  width: 415px;
  height: 221px;

  padding: 20px;
  margin: 12px;

  border-radius: 9px;

  color: ${({ theme }) => theme.colors.highlight};
  background: ${({ theme }) => theme.colors.container};
  font-weight: bold;

  animation: slide-right 0.4s ease;
`;

export const TileHeader = styled.h3`
  margin-bottom: 10px;
`;

export const TileDescription = styled.span``;

export const TileButton = styled(NavLink)<{ theme: ITheme }>`
  margin-top: auto;
  margin-left: auto;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.highlight};
`;
