import styled from 'styled-components';
import { ITheme } from 'types';

export const ProfilePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 24px;
  height: 100%;
`;

export const ProfileContainer = styled.div<{ theme: ITheme }>`
  display: flex;
  flex-direction: column;
  max-width: unset;
  width: 100%;
  padding: 50px 10px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.container};

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 1200px;
    flex-direction: row;
  }

  animation: slide-down 0.4s ease;
`;

export const AvatarArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 20px;

  @media ${({ theme }) => theme.device.laptopL} {
    max-width: 300px;
    width: 100%;
    padding-bottom: 0;
  }
`;

export const UserInfoArea = styled.div`
  width: 100%;
`;

export const UserName = styled.h1<{ theme: ITheme }>`
  color: ${({ theme }) => theme.colors.highlight};
  margin-bottom: 30px;
  font-size: 24px;
`;
