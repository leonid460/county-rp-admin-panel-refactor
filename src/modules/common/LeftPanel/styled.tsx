import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ITheme } from 'types';
import { LeftPanelOpener } from 'modules/common/LeftPanelOpener';

export const Header = styled(NavLink)<{ theme: ITheme }>`
  display: block;

  width: 100%;
  min-height: 80px;
  height: 80px;

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
  margin-bottom: auto;
`;

interface IPanelContainerProps {
  isOpen: 1 | 0;
}

export const PanelContainer = styled.div<IPanelContainerProps>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  min-width: ${({ isOpen }) => (isOpen ? '100vw' : '0')};
  min-height: 100vh;
  height: 100vh;
  background: ${({ theme }) => theme.colors.leftPanel.background};

  transition: min-width 0.4s ease;

  ${({ theme }) => `
    @media ${theme.device.laptop} {
      display: flex;
      min-width: 350px;
      width: 350px;
      height: initial;
    }
  `}
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

export const MenuCloser = styled(LeftPanelOpener)`
  color: white;
  background: ${({ theme }) => theme.colors.leftPanel.rowActiveBackground};
  margin: auto auto 20px auto;
  border-radius: 50%;
`;
