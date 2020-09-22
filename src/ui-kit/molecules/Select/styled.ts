import styled from 'styled-components';

export const Select = styled.select`
  width: 220px;
  height: 38px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
`;

export const SelectWithLabelWrapper = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > span {
    margin-right: 20px;
    color: ${({ theme }) => theme.colors.secondaryText};
  }
`;
