import React, { useState } from 'react';
import { Base } from 'ui-kit/templates';
import { Input, withLabel } from 'ui-kit/atoms';
import { IInputProps } from 'ui-kit/atoms/Input/types';
import { CheckboxWithLabel } from 'ui-kit/molecules';

const InputWithLabel = withLabel<IInputProps>(Input);

export const TestRoom = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState('');

  return (
    <Base>
      <CheckboxWithLabel label="Checkbox" value={checked} setValue={setChecked} />
      <InputWithLabel label="Test" value={input} setValue={setInput} />
    </Base>
  );
};
