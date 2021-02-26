import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) => theme.colors.container};
`;

// export const TitleContainer = styled.div`
//   width: 100%;
//   padding: 16px;
//   color: ${({ theme }) => theme.colors.primaryText};
// `;
//
// export const TitleText = styled.h3`
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 19px;
//   text-align: center;
// `;

export const Title = styled.h3`
  width: 100%;
  padding: 16px;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const RowsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

const Column = styled.div`
  width: calc((100% - 16px) / 2);
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
`;

export const ColumnForName = styled(Column)`
  padding-left: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;

export const ColumnForValue = styled(Column)`
  padding-right: 16px;
  color: ${({ theme }) => theme.colors.primaryText};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 16px;

  @media ${({ theme }) => theme.device.mobileM} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;
