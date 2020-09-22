import styled from 'styled-components';

export const Select = styled.select`
  width: 220px;
  height: 38px;

  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 6px;

  color: ${({ theme }) => theme.colors.input.text} !important;
  background: ${({ theme }) => theme.colors.input.background} !important;
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
