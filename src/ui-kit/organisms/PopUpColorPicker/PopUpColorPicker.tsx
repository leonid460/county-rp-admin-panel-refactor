import React, { useState } from 'react';
import { PopUp, ColorPalette } from 'ui-kit/molecules';
import { Input } from 'ui-kit/atoms';

export const PopUpColorPicker = () => {
  const [color, setColor] = useState('');

  return (
    <PopUp
      align="left"
      openerContent={
        <Input
          value={color}
          setValue={() => {
            // eslint-disable-next-line no-empty-function
          }}
        />
      }
    >
      <ColorPalette onChange={setColor} />
    </PopUp>
  );
};
