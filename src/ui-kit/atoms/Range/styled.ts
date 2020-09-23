import styled from 'styled-components';

const barHeight = '10px';
const borderRadius = '8px';
const trackBorderSize = '2px';

const cursorSize = '20px';

export const Input = styled.input<{ barBackground?: string }>`
  appearance: none;
  width: 210px;
  background: transparent;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    height: ${cursorSize};
    width: ${cursorSize};
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.highlight};
    cursor: pointer;
    transform: translateY(calc(-${trackBorderSize} - ${cursorSize} / 4));
  }

  &::-webkit-slider-runnable-track {
    height: ${barHeight};
    cursor: pointer;
    background: ${({ barBackground, theme }) => barBackground || theme.colors.container};
    border-radius: ${borderRadius};
    border: ${trackBorderSize} solid ${({ theme }) => theme.colors.border};
  }

  &:focus {
    outline: none;
  }
`;
