import React from 'react';
import { PopUp, ColorPalette } from 'ui-kit/molecules';
import * as Styled from './styled';
import { IPopUpColorPickerProps } from './types';

const ColorPaletteButton = () => (
  <Styled.ColorPaletteButton>
    <span className="material-icons">palette</span>
  </Styled.ColorPaletteButton>
);

export const PopUpColorPicker: React.FC<IPopUpColorPickerProps> = ({ value, setValue }) => {
  return (
    <Styled.Container>
      <Styled.Input value={value} setValue={setValue} />
      <PopUp align="right" openerContent={<ColorPaletteButton />}>
        <ColorPalette initValue={value} onChange={setValue} />
      </PopUp>
    </Styled.Container>
  );
};
