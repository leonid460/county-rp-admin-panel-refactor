import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ITheme } from 'types';

export const Header = styled(NavLink)<{ theme: ITheme }>`
  display: block;

  width: 100%;
  height: 58px;

  padding-top: 30px;

  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  text-decoration: none;
  text-align: center;

  color: ${({ theme }) => theme.colors.leftPanel.text};
`;

export const RowsContainer = styled.div`
  width: 100%;
`;

export const PanelContainer = styled.div`
  width: 350px;
  min-height: 100vh;

  background: ${({ theme }) => theme.colors.leftPanel.background};
`;

const activeClassName = 'nav-item-active';

export const Row = styled(NavLink).attrs({
  activeClassName
})<{ theme: ITheme }>`
  display: flex;
  align-items: center;
  padding-left: 21px;
  border-left: 5px solid transparent;

  color: white;
  height: 45px;

  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;

  text-decoration: none;

  cursor: pointer;

  &.${activeClassName} {
    border-left: 5px solid ${({ theme }) => theme.colors.leftPanel.rowActiveBorder};
    background: ${({ theme }) => theme.colors.leftPanel.rowActiveBackground};

    animation: fade-in 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.leftPanel.rowActiveHoverBackground};
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors.leftPanel.rowHoverBackground};
  }
`;
