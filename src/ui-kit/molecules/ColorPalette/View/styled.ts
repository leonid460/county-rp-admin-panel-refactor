import styled from 'styled-components';

interface IViewProps {
  hslColor: string;
}

export const View = styled.div.attrs<IViewProps>(({ hslColor }) => ({
  style: {
    background: hslColor
  }
}))<{ hslColor: string }>`
  width: 100%;
  height: 115px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;
