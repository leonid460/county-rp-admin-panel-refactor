import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

export const ColorBlock = styled.div<{ color: string }>`
  width: 100%;
  height: 600px;
  background: ${({ color }) => color};
`;
