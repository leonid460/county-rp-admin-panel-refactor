import styled from 'styled-components';

export const PageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 16px;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 35px;
  }
`;
