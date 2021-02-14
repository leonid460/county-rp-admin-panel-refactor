import React, { useEffect } from 'react';
import { PopUp, ColorPalette } from 'ui-kit/molecules';
import * as Styled from './styled';
import { IPopUpColorPickerProps } from './types';

function isCorrectColor(color: string) {
  return !(color.length < 7 && color.length > 0 && color[0] !== '#');
}

const ColorPaletteButton = () => (
  <Styled.ColorPaletteButton>
    <span className="material-icons">palette</span>
  </Styled.ColorPaletteButton>
);

export const PopUpColorPicker: React.FC<IPopUpColorPickerProps> = ({ value, setValue }) => {
  useEffect(() => {
    if (!isCorrectColor(value)) {
      setValue('#' + value);
    }
  }, [value]);

  return (
    <Styled.Container>
      <Styled.Input value={value} setValue={setValue} />
      <PopUp align="right" openerContent={<ColorPaletteButton />}>
        <ColorPalette initValue={value} onChange={setValue} />
      </PopUp>
    </Styled.Container>
  );
};
