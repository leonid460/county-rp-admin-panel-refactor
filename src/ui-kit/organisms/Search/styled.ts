import styled from 'styled-components';

export const OpenerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 38px;
  width: 220px;
  padding-right: 7px;
  border: 1px solid ${({ theme }) => theme.colors.input.border};
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.input.background};
`;

export const OpenerTextContainer = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  padding: 9px 7px;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.input.text};
  cursor: pointer;
  text-align: center;
`;
