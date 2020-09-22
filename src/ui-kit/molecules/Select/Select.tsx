import React, { useCallback } from 'react';
import * as Styled from './styled';

interface ISelectProps {
  options: { name: string; key: string }[];
  value: string;
  setValue: (value: string) => void;
}

interface ISelectWithLabelProps extends ISelectProps {
  label: string;
}

export const Select = ({ options, value, setValue }: ISelectProps) => {
  const onChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  }, []);

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
