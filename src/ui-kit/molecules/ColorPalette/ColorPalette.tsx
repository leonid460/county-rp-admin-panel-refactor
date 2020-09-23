import React, { useState } from 'react';
import { Range } from 'ui-kit/atoms';
import { View } from './View';
import * as Styled from './styled';

function makeColorSliderBackground() {
  const colorsList: string[] = [];

  for (let i = 0; i < 360; i++) {
    colorsList.push(`hsl(${i + 1}, 100%, 50%)`);
  }

  return `linear-gradient(to right, ${colorsList.join(', ')})`;
}

function makeSaturationSliderBackground(colorValue: number) {
  const colorsList: string[] = [];

  for (let i = 0; i < 100; i++) {
    colorsList.push(`hsl(${colorValue}, ${i}%, 50%)`);
  }

  return `linear-gradient(to right, ${colorsList.join(', ')})`;
}

function makeBrightnessSliderBackground(colorValue: number) {
  const colorsList: string[] = [];

  for (let i = 0; i < 100; i++) {
    colorsList.push(`hsl(${colorValue}, 100%, ${i}%)`);
  }

  return `linear-gradient(to right, ${colorsList.join(', ')})`;
}

export const ColorPalette = () => {
  const [color, setColor] = useState(331);
  const [saturation, setSaturation] = useState(100);
  const [brightness, setBrightness] = useState(50);

  const colorSliderTrackColor = makeColorSliderBackground();
  const saturationSliderTrackColor = makeSaturationSliderBackground(color);
  const brightnessSliderTrackColor = makeBrightnessSliderBackground(color);

  return (
    <Styled.Container>
      <View color={color} saturation={saturation} brightness={brightness} />
      <Range
        min={0}
        max={360}
        value={color}
        setValue={setColor}
        trackColor={colorSliderTrackColor}
      />
      <Range
        min={0}
        max={100}
        value={saturation}
        setValue={setSaturation}
        trackColor={saturationSliderTrackColor}
      />
      <Range
        min={0}
        max={100}
        value={brightness}
        setValue={setBrightness}
        trackColor={brightnessSliderTrackColor}
      />
    </Styled.Container>
  );
};
