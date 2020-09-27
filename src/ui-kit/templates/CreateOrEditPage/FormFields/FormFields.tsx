import React from 'react';
import { InputWithLabel, SelectWithLabel, CheckboxWithLabel } from 'ui-kit/molecules';
import { PopUpColorPickerWithLabel } from 'ui-kit/organisms';
import * as Styled from './styled';
import { IFormFieldsProps, IFormField } from './types';

export const FormFields = ({ fields }: IFormFieldsProps) => {
  const renderField = (field: IFormField<unknown>) => {
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
    <Styled.FormFieldsWrapper>{fields.map((field) => renderField(field))}</Styled.FormFieldsWrapper>
  );
};
