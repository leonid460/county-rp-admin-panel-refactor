import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.container};
`;

export const ColumnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Column = styled.div`
  display: none;
  width: calc((100% - 16px) / 2);
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.secondaryText};

  &:first-child {
    padding-left: 16px;
  }

  &:first-child,
  &:last-child {
    display: block;
  }

  @media ${({ theme }) => theme.device.mobileM} {
    width: calc(100% / 3 - 16px);

    &:nth-child(2) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.mobileL} {
    width: calc(100% / 4 - 16px);

    &:nth-child(3) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(100% / 5 - 16px);

    &:nth-child(4) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    width: calc(100% / 6 - 16px);

    &:nth-child(5) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.laptopL} {
    width: calc(100% / 7 - 16px);

    &:nth-child(6) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    width: calc(100% / 8 - 16px);

    &:nth-child(7) {
      display: block;
    }
  }

  @media ${({ theme }) => theme.device.desktopL} {
    width: calc(100% / 9 - 16px);

    &:nth-child(8) {
      display: block;
    }
  }
`;

export const Border = styled.div`
  height: 1px;
  width: calc(100% - 16px * 2);
  background: ${({ theme }) => theme.colors.border};
`;
