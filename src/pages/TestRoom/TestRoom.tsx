import React, { useState } from 'react';
import { Base } from 'ui-kit/templates';
import { Checkbox } from 'ui-kit/atoms/Checkbox';

export const TestRoom = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Base>
      <Checkbox checked={checked} handleCheck={() => setChecked(!checked)} />
    </Base>
  );
};
