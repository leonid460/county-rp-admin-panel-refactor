import React from 'react';
import * as Styled from './styled';
import { ISmartFormProps, TSmartFormFieldType, ISmartFormFieldFactory } from './types';
import { InputWithLabel, SelectWithLabel, CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPickerWithLabel } from 'ui-kit/organisms';

const TextFieldFactory: ISmartFormFieldFactory<string> = ({ field }) => (
  <InputWithLabel
    key={field.name}
    label={field.name}
    value={field.value}
    setValue={field.setValue}
  />
);

const NumberFieldFactory: ISmartFormFieldFactory<number> = ({ field }) => (
  <InputWithLabel
    key={field.name}
    type="number"
    label={field.name}
    value={field.value}
    setValue={field.setValue}
  />
);

const SelectFactory: ISmartFormFieldFactory<string> = ({ field }) => (
  <SelectWithLabel
    key={field.name}
    label={field.name}
    options={field.options}
    value={field.value}
    setValue={field.setValue}
  />
);

const CheckboxFactory: ISmartFormFieldFactory<boolean> = ({ field }) => (
  <CheckboxWithLabel
    key={field.name}
    label={field.name}
    value={field.value}
    setValue={field.setValue}
  />
);

const ColorPickerFactory: ISmartFormFieldFactory<string> = ({ field }) => (
  <PopUpColorPickerWithLabel
    label={field.name}
    key={field.name}
    value={field.value}
    setValue={field.setValue}
  />
);

export const SmartForm = ({ fields }: ISmartFormProps) => {
  return (
    <Styled.SmartFormContainer>
      {fields.map((field) => formFieldStrategy(field.type)({ field }))}
    </Styled.SmartFormContainer>
  );
};

function formFieldStrategy(type: TSmartFormFieldType): ISmartFormFieldFactory<unknown> {
  const fields: { [key in TSmartFormFieldType | 'default']: ISmartFormFieldFactory<unknown> } = {
    text: TextFieldFactory,
    number: NumberFieldFactory,
    select: SelectFactory,
    checkbox: CheckboxFactory,
    color: ColorPickerFactory,
    default: TextFieldFactory
  };

  return fields[type] || fields.default;
}
