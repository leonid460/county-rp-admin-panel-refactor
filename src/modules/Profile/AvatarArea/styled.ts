import styled from 'styled-components';

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
