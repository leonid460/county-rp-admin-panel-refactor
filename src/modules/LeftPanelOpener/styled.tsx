import styled from 'styled-components';

export const OpenerContainer = styled.label`
  display: flex;
  align-items: center;

  max-height: 50px;
  height: 50px;
  max-width: 50px;
  width: 50px;
  margin-right: 50px;
  margin-left: 10px;
  border: none;

  color: ${({ theme }) => theme.colors.header};
  user-select: none;
  cursor: pointer;

  input {
    display: none;
  }

  .material-icons {
    width: 100%;
    font-size: 40px;
    text-align: center;
  }

  @media ${({ theme }) => theme.device.laptop} {
    display: none;
  }
`;
