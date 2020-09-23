import styled from 'styled-components';

const cursorSize = '20px';

export const OuterWrapper = styled.div`
  display: flex;
  width: 210px;
  flex-direction: column;
  justify-content: center;
  height: 38px;
`;

export const InnerWrapper = styled.div.attrs<{ trackColor?: string }>(({ trackColor, theme }) => ({
  style: {
    background: trackColor || theme.colors.container
  }
}))<{ trackColor?: string }>`
  display: flex;
  height: 10px;
  background: ${({ theme }) => theme.colors.container};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 7px;
`;

export const Input = styled.input`
  appearance: none;
  width: 210px;
  position: relative;
  background: transparent;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.3s;

  &::-webkit-slider-thumb {
    appearance: none;
    height: ${cursorSize};
    width: ${cursorSize};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.highlight};
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;
