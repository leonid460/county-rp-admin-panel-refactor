import React, { useState } from 'react';
import { Base } from 'ui-kit/templates';
import { Input, withLabel } from 'ui-kit/atoms';
import { IInputProps } from 'ui-kit/atoms/Input/types';
import { CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPicker } from 'ui-kit/organisms';
import { Range } from 'ui-kit/atoms';
import * as Styled from './styled';

const InputWithLabel = withLabel<IInputProps>(Input);

export const TestRoom = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');
  const [range, setRange] = useState(100);
  const [min, max] = [0, 100];

  return (
    <Base>
      <Styled.Container>
        <CheckboxWithLabel label="Checkbox" value={checked} setValue={setChecked} />
        <InputWithLabel label="Test" value={input} setValue={setInput} />
        <Range min={min} max={max} value={range} setValue={setRange} />
        <PopUpColorPicker />
      </Styled.Container>
    </Base>
  );
};
