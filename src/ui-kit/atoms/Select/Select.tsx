import React, { useCallback } from 'react';
import * as Styled from './styled';
import { ISelectProps } from './types';

export const Select: React.FC<ISelectProps> = ({ options, value, setValue }) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setValue(event.target.value);
    },
    [setValue]
  );

  return (
    <Styled.Select value={value} onChange={onChange}>
      {options.map(({ name, key }) => (
        <option key={key} value={key}>
          {name}
        </option>
      ))}
    </Styled.Select>
  );
};
