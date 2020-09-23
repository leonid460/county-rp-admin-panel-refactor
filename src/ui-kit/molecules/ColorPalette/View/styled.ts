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
  height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
