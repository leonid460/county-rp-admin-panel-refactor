import React, { useState } from 'react';
import { Base } from 'ui-kit/templates';
import { Checkbox, Input, withLabel } from 'ui-kit/atoms';
import { IInputProps } from 'ui-kit/atoms/Input/types';

const InputWithLabel = withLabel<IInputProps>(Input);

export const TestRoom = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');

  return (
    <Base>
      <Checkbox checked={checked} handleCheck={() => setChecked(!checked)} />
      <InputWithLabel label="Test" value={input} setValue={setInput} />
    </Base>
  );
};
