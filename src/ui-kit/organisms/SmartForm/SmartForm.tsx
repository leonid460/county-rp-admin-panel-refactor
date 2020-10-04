import React from 'react';
import { InputWithLabel, SelectWithLabel, CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPickerWithLabel } from 'ui-kit/organisms/index';
import * as Styled from './styled';
import { ISmartFormProps, ISmartFormStateField } from './types';

export const SmartForm = ({ fields }: ISmartFormProps) => {
  const renderField = (field: ISmartFormStateField<unknown>) => {
    switch (field.type) {
      case 'text':
        return (
          <InputWithLabel
            label={field.name}
            key={field.name}
            value={field.value as string}
            setValue={field.setValue}
          />
        );
      case 'select':
        return (
          <SelectWithLabel
            label={field.name}
            key={field.name}
            options={field.options}
            value={field.value as string}
            setValue={field.setValue}
          />
        );
      case 'checkbox':
        return (
          <CheckboxWithLabel
            label={field.name}
            key={field.name}
            value={field.value as boolean}
            setValue={field.setValue}
          />
        );
      case 'color':
        return (
          <PopUpColorPickerWithLabel
            label={field.name}
            key={field.name}
            value={(field.value as string) || '#b7eaeb'}
            setValue={field.setValue}
          />
        );
      default:
        return <></>;
    }
  };

  return (
    <Styled.SmartFormContainer>
      {fields.map((field) => renderField(field))}
    </Styled.SmartFormContainer>
  );
};
