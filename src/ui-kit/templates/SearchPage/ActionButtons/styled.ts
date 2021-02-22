import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    width: unset;
  }
`;
