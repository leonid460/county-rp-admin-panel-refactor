import styled from 'styled-components';

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  & > * {
    margin-bottom: 16px;
  }

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    border: none;

    & > * {
      margin-left: 12px;
      margin-bottom: 0;
    }
  }
`;
