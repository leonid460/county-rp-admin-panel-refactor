import styled from 'styled-components';

export const CheckboxContainer = styled.label`
  display: inline-block;

  width: 20px;
  height: 20px;

  padding: 2px;

  border-radius: 5px;
  outline: none;
  box-sizing: border-box;

  border: 2px solid ${({ theme }) => theme.colors.border};

  background-color: ${({ theme }) => theme.colors.container};

  cursor: pointer;

  input[type='checkbox'] {
    display: none;
    outline: none;
  }
`;

export const CheckBoxMark = styled.div<{ checked: 1 | 0 }>`
  width: 100%;
  height: 100%;
  border-radius: 2px;

  background: ${({ checked, theme }) =>
    checked ? theme.colors.highlight : theme.colors.container};

  transition: all 0.3s ease;
`;
