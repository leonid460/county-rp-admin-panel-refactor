import React, { useCallback } from 'react';
import * as Styled from './styled';
import { ISelectProps, ISelectWithLabelProps } from './types';

export const Select = ({ options, value, setValue }: ISelectProps) => {
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

export const SelectWithLabel = ({ label, ...props }: ISelectWithLabelProps) => (
  <Styled.SelectWithLabelWrapper>
    <span>{label}</span>
    <Select {...props} />
  </Styled.SelectWithLabelWrapper>
);
